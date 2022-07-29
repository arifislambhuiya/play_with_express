# Lottery API

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy (user can buy multiple at a time)
- raffle draw

Ticket:

- number(unique)
- username
- price
- timestamp

Routes :

- /tickets/t/:ticketId (Get) find single ticket
- /tickets/t/:ticketId (PATCH) update single ticket by id
- /tickets/t/:ticketId (DELETE) delete single ticket by id
- /tickets/u/:username (GET) find ticket for given user
- /tickets/u/:username (PATCH) update user by given username
- /tickets/u/:username (DELETE) delete all ticket for given user
- /tickets/sell - create tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw
- /tickets/ - find all tickets
