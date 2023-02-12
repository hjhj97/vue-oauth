const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const app = express();

const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/api/callback_kakao", async (request, response) => {
  const authCode = request.query.code;
  const res = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    {
      grant_type: "authorization_code",
      client_id: process.env.KAKAO_REST_API_KEY,
      redirect_uri: "http://localhost:3000/api/callback_kakao",
      code: authCode,
    },
    { headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" } }
  );

  if (res) {
    response.send(res.data);
  } else response.send("fail");
});

app.listen(3000, () => console.log("listening port 3000"));
