var express = require('express')

const SERVER_PORT = 8089
var app = express()

//Static middleware
app.use("/test", express.static("./public"))
app.use(express.json())
//app.use(express.text())
//https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended: true}))


//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})


//http://localhost:8089/user?firstname=Pritesh&lastname=Patel
//Query Parameter
app.get("/user", (req, res) => {
    const { firstname, lastname } = req.query
    const user = {
        firstname: firstname || "Pritesh",
        lastname: lastname || "Patel",
  }

  res.json(user)
})

//http://localhost:8089/user/pritesh/patel
//Path parameter
app.post("/user/:firstname/:lastname", (req, res) => {
    //res.json(req.params)
    const {firstname, lastname} = req.params
    const user = {
        firstname,
        lastname,
      };
      res.json(user);
})

//http://localhost:8089/index
// app.get("/index", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

//http://localhost:8089/
app.get("/", (req, res) => {
    res.status(201).send("<h1>Welcome to Express Server</h1>")
    //res.send("<h1>Welcome to Express Server</h1>")
    //res.end()
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})