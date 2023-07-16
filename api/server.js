const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
let data = require('./vendor/data') 

app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})