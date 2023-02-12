const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/getTest", (request, response) => {
  const json = {
    success: true,
    data: "hello",
  };
  response.send(json);
});

app.listen(3000, () => console.log("listening port 3000"));
