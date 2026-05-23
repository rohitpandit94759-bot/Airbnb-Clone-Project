const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
       type: string,
       required: true,
    },
    description: string,
    image: {
       type: string,
       set: (v) =>
       v=== ""?
        " https://unsplash.com/photos/cowboy-hat-on-wooden-fence-with-monument-valley-in-background-zlIEaRjDo_Q" 
        : v,
    },
    price: number,
    location: string,
    country: string
});



const Listing = mongoose.models("Listing",listingSchema); 
module.export =  Listing;