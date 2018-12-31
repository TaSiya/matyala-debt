const server = require('./src/server')
const pool = require('./src/db-config')
const routes = require('./src/api-routes')
const Service = require('./services/services')
const ApiRoutes = require('./api/routes')
const queries = Service(pool)
const api = ApiRoutes(server, queries)
routes(server, api)

const PORT = process.env.PORT || 2018
server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
