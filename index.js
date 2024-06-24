const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  res.json("heheheh")
})

app.listen(3001, ()=> {
  console.log(`Server running at port 3001`)
})