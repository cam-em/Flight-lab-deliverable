const dbConfig = require('./config/db.config')


const db = require("./models");
const Flight = require('./models/flight.model');
const Terminal = require('./Models/terminal.model')
const Airport = db.airport;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

const cdgFrance = new Flight({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "flight1"
})

const heathbrow = new Flight({
  from: "Heathbrow UK",
  to: "JFK New-York, USA",
  airline: "flight2"
})

const newAirport = new Airport({
	name: "JFK",
	country: "US",
	opened: "1990-12-15"
})

const newTerm = new Terminal({
  name: "Terminal 1",
  flights: ["flight1", "flight2"],
  capacity: 234324
})

airport.save()
console.log("Airport saved", airport)
console.log("cdgFrance saved", cdgFrance)
console.log("heatbrow saved", heathbrow)
console.log("airport saved", newAirport)
console.log("new terminal saved", newTerm)
// Lets Make and Save our first airport