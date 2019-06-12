// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashtalk.js')
const app = express()
const port = 3000

// setting helper
const hbs = exphbs.create({
  defaultLayout: 'main',
  // Specify helpers which are only registered on this instance.
  helpers: {
    setChecked: require('./helper/checked radio.js'),
  }
})

// setting template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body.target
  const trashTalk = generateTrashTalk(option)
  res.render('index', { trashTalk: trashTalk, option: option })
})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})

