var dotenv = require("dotenv").config();
var spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");


var input = process.argv[2];


if (input === "concert-this") {
    console.log("Concert");
    var artist = process.argv[3];
    var queryUrlMusic = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryUrlMusic, function (error, response, body) {
        console.log("Venue: " + JSON.parse(body).VenueData.name);
    });

}

if (input === "spotify-this-song") {
    console.log("Song");
}

if (input === "movie-this") {
    var movie = process.argv[3];
    var queryUrlMovie = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    request(queryUrlMovie, function (error, response, body) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("Rating: " + JSON.parse(body).Ratings); // returning objects
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
    });
}

