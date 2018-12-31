module.exports = (app, route) => {
  app.get('/', route.home)
  app.get('/api/all', route.all)
}
