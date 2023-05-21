const List = require("./List");

class Customer extends List {
  constructor() {
    super();
    // this.name = name;
    // this.movie = movie;
    this.addCustomer = addCustomer;
  }
}

function addCustomer(name, movie) {
  this.append([name, movie]);
}

module.exports = Customer;
