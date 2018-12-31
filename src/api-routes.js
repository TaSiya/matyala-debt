module.exports = (app, route) => {
  app.get('/', route.all)
}
