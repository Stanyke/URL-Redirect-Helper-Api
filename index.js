const express = require("express");
const cors = require("cors");
const { http, https } = require("follow-redirects");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Fetched successfully", success: true });
});

app.post("/api/v1/final-url", (req, res) => {
  const request = https.request(req.body.url, (response) => {
    return res.status(200).send({
      success: true,
      message: "Fetched successfully",
      data: response?.responseUrl,
    });
  });
  request.end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
