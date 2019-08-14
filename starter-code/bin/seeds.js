const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbName = 'lab-moongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);
const testing = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Show me the money!"
  },
  {
    name: "Steve Urkel",
    occupation: "Nice guy",
    catchPhrase: "Did I do that?"
  },
  {
    name: "Joe Rogan",
    occupation: "UFC referee, podcast master, stand-up comedian",
    catchPhrase: "I like chimpanzees."
  }
]
Celebrity.create(testing, (err) =>{
  if(err) { throw(err) }
  console.log(`Created ${testing.length} testing`)
  mongoose.connection.close();
});