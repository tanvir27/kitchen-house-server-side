const express = require("express");

const cors = require("cors");
const allData = require("./data/chefInfo.json");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// all data
app.get("/", (req, res) => {
  res.send("Hello From kitchen house server");
});
app.get("/chefDetails", (req, res) => {
  res.send(allData);
});
// specific data
app.get("/chefDetails/:id", (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening from port: ${port}`);
});
