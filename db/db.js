const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket.
   * @param {string} username
   * @param {number} price
   * @returns {ticket} return ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  //return all tickets
  find() {
    return this.tickets;
  }

  /**
   * find single ticket by id
   * @param {string} ticketId
   * @return {Ticket}
   */
  findById(ticketId) {
    const ticket = this.find(
      /** @param {ticket}*/
      (ticket) => {
        ticket.id = ticketId;
      }
    );
    return ticket;
  }

  /**
   *
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /** @param {Ticket} ticket */
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   * update my username
   *
   */
  updateByUsername(username, userBody) {
    const user = this.tickets.filter((ticket) => ticket.username === username);
    console.log(user);
    user.username = userBody.username || user.username;
    user.price = userBody.price || user.price;
    user.createdAt = userBody.createdAt || user.createdAt;
    return user;
  }

  /**
   * delete by username
   */
  deleteByUsername(username) {
    const user = this.findByUsername(username);
    if (user !== -1) {
      this.user.splice(user, 1);
      return true;
    } else {
      return false;
    }
  }

  //update ticket info
  /**
   *
   * @param {string} ticketId
   * @param {{username: string,price:number }} body
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username || ticket.username;
    ticket.price = ticketBody.price || ticket.price;
    ticket.createdAt = new Date();

    return ticket;
  }

  /**
   * delete ticket
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let winnerIndexs = new Array(winnerCount);

    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexs.includes(winnerIndex)) {
        winnerIndexs[index++] = winnerIndex;
        continue;
      }
    }
    const winners = winnerIndexs.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
