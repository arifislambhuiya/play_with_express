const shortId = require("shortid");

class Ticket {
  /**
   * constructor function
   * @param {string} username
   * @param {number} price
   */
  constructor(username, price) {
    this.id = shortId.generate();
    // this.id = Math.floor(Math.random() * 10000);
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
