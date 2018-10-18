import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('show', { path: '/:id' });
});
