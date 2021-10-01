const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(3000)
