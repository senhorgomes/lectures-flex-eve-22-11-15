const express = require("express");
const morgan = require("morgan")
const bodyparser = require("body-parser")
const app = express()
const port = 3001;//3000, 8000
const heroes = require("./routes/heroes")

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))

// localhost:8080/
///GET ROUTES Router
app.use("/heroes", heroes);


app.listen(port, () => console.log(`Server is running on port ${port}!`))