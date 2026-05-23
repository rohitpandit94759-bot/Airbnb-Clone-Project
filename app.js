const express = require("express");                                          // Import Express framework
const app = express();                                                          // Create an Express application

const mongoose = require("mongoose");                                                  // Import mongoose for MongoDB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const listing = require("../models/listing.js");

// Route for the home page
app.get("/", (req, res) => {
    res.send("HI I am root");
});


// Connect to MongoDB
main()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(err);
    });


// Function to connect MongoDB using mongoose
async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/testListing", (req, res) =>{


})


// Start server on port 8080
app.listen(8080, () => {
    console.log("Server is listening to 8080");
});