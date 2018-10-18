import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return fetch('/api/employees')
      .then(resp => resp.json())
      .then(resp => resp.employees);
  }
}
