const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Define API routes here
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
