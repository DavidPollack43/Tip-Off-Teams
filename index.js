const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend')));

app.get("/", (req, res) => {
    res.send('Hello world');
});


app.get("/playerInfo", (req, res) => {
    axios.get(`https://balldontlie.io/api/v1/players/${req.headers.playerid}`)
    .then(data => {
      console.log(data.data)
      res.send(data.data)})
  } 
);

app.get("/playerStats", (req, res) => {
  axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${req.headers.playerid}`)
    .then(data => {
      console.log(data.data);
      res.send(data.data);
    })
})

//Another get for player data like one above

// app.listen(8000, () => {
//   console.log("Listening on port 8000");
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});