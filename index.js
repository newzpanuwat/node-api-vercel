const express = require('express')
const users = require('./data/users.js')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log('listening port', PORT);
})

app.get('/', (req, res) => {
  res.send('this is my api running..')
})

app.get('/about', (req, res) => {
  res.send('about page')
})

app.get('/users', (req, res) => {
  res.json(users)
})


module.exports = app