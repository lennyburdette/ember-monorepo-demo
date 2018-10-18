import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return fetch('/api/payments')
      .then(resp => resp.json())
      .then(resp => resp.payments);
  }
}
