const pg = require('pg')
const Pool = pg.Pool
const connectionString = process.env.DATABASE_URL || 'postgresql://tasiya:pg123@localhost:5432/matyaladb'
const pool = new Pool({
  connectionString
})
module.exports = pool
