import Route from '@ember/routing/route';

export default class ShowRoute extends Route {
  model({ id }) {
    return fetch(`/api/employees/${id}`)
      .then(resp => resp.json())
      .then(resp => resp.employee);
  }
}
