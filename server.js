const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: ["https://kira9edu.herokuapp.com/", "https://kira9edu.herokuapp.com", "http://kira9edu.herokuapp.com", "http://localhost:8081", "http://localhost:4200", ]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "You did. Shinde... ;-) " });
  console.log('test method hit')
});

require("./app/routes/user.route")(app);

//websocket 
const WebSocket = require('ws')
 
const wss = new WebSocket.Server({ port: 8040 })
 
wss.on('connection', ws => {
  onConnection(ws);
  ws.on('message', message => {
    //onmessage(message, ws);
    console.log(`Received message => ${message}`)
  })
  ws.send('Hello! Message From Server!!')
})

// set port, listen for requests
const PORT = process.env.PORT || 8050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


