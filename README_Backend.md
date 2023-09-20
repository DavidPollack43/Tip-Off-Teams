### JS Project Backend
- We want to create a simple Express backend for our JS projects if we need to use an API key that we don't want to expose.

--- 
### Libraries

- `Axios` Promise-based HTTP library that enables Node to interact with an API service.
- `CORS` Cross-Origin Resource Sharing in Node. Allows our front-end client to make requests for resources to an external back-end server.
- `Dotenv` Package to keep passwords, API keys, and other sensitive data out of your code. 
- `Express` Framework for Node that provides broad features for building web and mobile applications. We'll use it to run our server on a specific PORT and create a route to make requests to.

---

### Setup

- Create .env file at the root and add it to the .gitignore
- if you already have an app, nest it under a frontend folder (frontend needs its own package.json)
- `$npm init -y` at the root (backend)
- `$npm install axios cors dotenv express`
- create `index.js` at the root

---

---
  ### .env
  - Create a key value pair for our API key. Do not use strings or spaces (important!)
  ```.env
    CAT_API_KEY=your_api_key
    OTHER_API_KEY=your_other_api_key
  ```
---

```js
// index.js
const express = require('express'); 
const cors = require('cors');
const axios = require('axios');

// use local .env file if in development, we'll host our keys differently on production
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); 
}

// create a new instance of the express framework
const app = express();

// enable CORS (cross-origin resource sharing). In order for your server to be accessible by other origins (domains).
app.use(cors());

// create backend route for '/' in other words, when a GET request is done to "localhost:BACKEND_PORT"
app.get("/", (req, res) => {
    res.send('Hello world'); // res.send sends response to the client
});

// run the server on PORT 5001 
app.listen(5001, () => {
  console.log("Listening on port 5001");
});

```

--- 

```js
// index.js

// create backend route that will make the request to the API with our hidden key and send the response to the client
app.get("/cats", (req, res) => {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${process.env.CAT_API_KEY}`)
    .then(data => res.send(data.data));
  } 
);

```




