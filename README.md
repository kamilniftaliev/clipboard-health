This project contains two challenges - a "Ticket Breakdown" challenge and a "Refactoring" challenge. The two challenges are unrelated, but you should complete both in the same folder and share the link in Coderbyte. Any written answers should be included in markdown files within this folder.

## [Ticket Breakdown](Ticket_Breakdown.md)

## [Refactoring](Refactoring.md)

If you are a JS novice, here's how to get started:

1. [Install Node.js](https://nodejs.org/en/download/) (we use `^16`, the latest LTS)
2. Run `npm i` in this repo to install dependencies
3. Run `npm test` to run the automated tests
4. Run `npm start` to launch `index.js` for any manual testing

### Ticket Breakdown:

#### Tickets:

##### Backend tickets:

1.  Assuming agents ID is stored in our own database, we have to add an additional argument for the GraphQL mutation we have when creating an agent. Let's say it's called `createAgent`. We have to add an OPTIONAL `id` field to that `createAgent` mutation and if it was given, we have to use it. But we also have to check for duplication of given ID each time. We don't want the same ID to be used for more than 1 agent. If an another agent with the same ID already exists, we have to return an error with some user friendly message.
2.  Add some tests for the `createAgent` mutation.

##### Frontend tickets:

1. Add a new input field to the form where agents are created. Make sure users understand that,
   this field is optional. We don't want to have a separate backend endpoint that checks for ID existence on each type (with some delay, of course) - because we'll have to also check for the given ID when `createAgent` is called.
   When `createAgent` returns an error complaining about existence of an agent with the same ID, we have to handle it by showing a user friendly message given from backend or fallback to our own message.
2. Add unit tests for the new version of agent creation form.
3. Add end-to-end tests for the new version of agent creation form.

### Explanation for refactoring:

Swiched to typescript to make it easier to work with the function. This way, the function won't be used with wrong
arguments and will save time to the engineers are using by showing them the errors, they're gonna get before it happens.
It also saved us time for unnecessary tests.
In the original function the code had, additional checks for types. Thanks to typescript, we can skip that.
Since we're using "createHash" function from "crypto" library 2 times, it makes sence to move it to a reusable function. Since I was required to write only 1 paragraph, it'd better for me to explain it in a call.
