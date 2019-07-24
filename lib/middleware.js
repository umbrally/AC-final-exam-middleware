const moment = require('moment')

module.exports = (req, res, next) => {
  console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')} | ${req.method} from ${req.url}`)
  next()
}