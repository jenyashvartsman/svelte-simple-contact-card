const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the Node.js backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
