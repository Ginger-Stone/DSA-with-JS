const { readFile, readFileSync } = require("fs");
const List = require("./List");
const Customer = require("./Customer");
const FILE = "./films.txt";
let movieArray = [];

var movieList = new List();
var customers = new Customer();

function cleanupArray(file) {
  let movies = [];
  readFileSync(file, "UTF8")
    .split("\n")
    .forEach((element) => {
      movies.push(element.trim());
    });
  return movies;
}

movieArray = cleanupArray(FILE);

// console.log(movieArray);

for (var i = 0; i < movieArray.length; i++) {
  movieList.append(movieArray[i]);
}

function displayList(list) {
  for (list.front(); list.hasNext(); ) {
    console.log(list.next());
  }
}

function checkOut(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    customerList.addCustomer(name, movie);
    // customerList.append(newCustomer);
    movieList.remove(movie);
  } else {
    console.log(`${movie} is not available.`);
  }
}

function getInput(question, callback) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(question, (input) => {
    readline.close();
    callback(input);
  });
}

function runVideoKiosk() {
  console.log("Available movies: ");
  displayList(movieList);
  getInput("Enter your name: ", function (name) {
    console.log(name);
    getInput("What movie would you like? ", function (movie) {
      console.log(movie);
      if (name && movie) {
        checkOut(name, movie, movieList, customers);
        console.log("Customer Rentals: ");
        console.log("Customer List: ");
        displayList(customers);
        console.log("Available movies: ");
        displayList(movieList);
      } else {
        console.log(name ? "Movie not selected." : "Name not entered");
      }
    });
  });
}

runVideoKiosk();
