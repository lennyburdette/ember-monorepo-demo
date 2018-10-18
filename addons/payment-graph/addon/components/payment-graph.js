import Component from '@ember/component';
import layout from '../templates/components/payment-graph';
import {
  axisBottom,
  axisLeft,
  scaleTime,
  scaleLinear,
  symbol,
  select,
  timeFormat,
  min,
  max
} from 'd3';

function msInDay(date) {
  return (
    date.getHours() * 60 * 60 * 1000 +
    date.getMinutes() * 60 * 1000 +
    date.getSeconds() * 1000
  );
}

function roundDate(date) {
  const roundedDate = new Date(date);
  roundedDate.setUTCHours(0);
  roundedDate.setUTCMinutes(0);
  roundedDate.setUTCSeconds(0);
  return roundedDate;
}

export default Component.extend({
  layout,
  classNames: ['payment-graph'],

  didInsertElement(...args) {
    this._super(...args);

    this.resizer = () => this.resize();
    window.addEventListener('resize', this.resizer);
    this.createGraph();
    this.resize();
  },

  didUpdateAttrs() {
    this._super();
    this.updateGraphData();
  },

  willDestroyElement(...args) {
    this._super(...args);
    window.removeEventListener('resize', this.resizer);
  },

  createGraph() {
    this.svg = select(this.element).append('svg');
    this.graph = this.svg.append('g');

    this.graph.append('g').attr('class', 'axis axis--x');
    this.graph.append('g').attr('class', 'axis axis--y');

    this.graph
      .append('g')
      .attr('class', 'dots')
      .selectAll('path')
      .data(this.payments)
      .enter()
      .append('path')
      .attr('fill', 'rgba(0, 128, 255, 0.5)')
      .attr('d', d => symbol().size(this.sizeScale())(d.amount));
  },

  sizeScale() {
    return scaleLinear()
      .domain([0, max(this.payments, d => d.amount)])
      .range([1, 500]);
  },

  size() {
    const margin = { top: 30, right: 30, bottom: 30, left: 40 };
    const width = this.element.clientWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    return Object.assign(margin, { width, height });
  },

  timeOfDayScale() {
    return scaleTime()
      .domain([0, 1000 * 60 * 60 * 24])
      .range([this.size().height, 0]);
  },

  dayScale() {
    return scaleTime()
      .domain([
        new Date(
          min(this.payments, d => new Date(d.capturedAt)) - 1000 * 60 * 60 * 24
        ),
        new Date(max(this.payments, d => new Date(d.capturedAt)))
      ])
      .range([0, this.size().width]);
  },

  updateGraphData() {
    const x = this.dayScale();
    const y = this.timeOfDayScale();

    this.graph
      .select('.dots')
      .selectAll('path')
      .data(this.payments)
      .transition()
      .duration(500)
      .attr('d', d => symbol().size(this.sizeScale())(d.amount))
      .attr('transform', d => {
        const date = new Date(d.capturedAt);
        return 'translate(' + x(roundDate(date)) + ',' + y(msInDay(date)) + ')';
      });
  },

  resize() {
    const margin = this.size();
    const { width, height } = margin;
    const x = this.dayScale();
    const y = this.timeOfDayScale();

    this.svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    this.graph.attr(
      'transform',
      'translate(' + margin.left + ',' + margin.top + ')'
    );

    this.graph
      .select('.axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(axisBottom(x).tickFormat(timeFormat('%b %d')));

    this.graph.select('.axis--y').call(
      axisLeft(y)
        .tickSize(-width)
        .tickFormat(timeFormat('%I %p'))
    );

    this.graph
      .select('.dots')
      .selectAll('path')
      .attr('transform', d => {
        const date = new Date(d.capturedAt);
        return 'translate(' + x(roundDate(date)) + ',' + y(msInDay(date)) + ')';
      });
  }
});
