const express = require("express");                                          // Import Express framework
const app = express();                                                          // Create an Express application

const mongoose = require("mongoose");                                                  // Import mongoose for MongoDB connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing");
const path = require("path");




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


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route for the home page
app.get("/", (req, res) => {
    res.send("HI I am root");
});

app.get("/Listings",async (req,res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index", {allListings});
});




// app.get("/testListing", async(req, res) =>{

//     let sampleListing = new Listing({
//         title: "MY New Villa",
//         description: "By the beach",
//         price: 1200,
//         Location: "Calangute, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved ");
//     res.send("successful testing");
// });


// Start server on port 8080
app.listen(8080, () => {
    console.log("Server is listening to 8080");
});