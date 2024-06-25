const express = require('express')
const app = express()
app.use(express.json())

//Test
app.get('/', (req, res)=> {
  res.json("heheheh")
})

//Routers
const usersRouter = require('./routes/Users')
app.use('/users',usersRouter)

//Database
const db = require('./models')
const PORT = process.env.PORT || 3001;
db.sequelize.sync({ force: true }).then(() =>[
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
  })
])