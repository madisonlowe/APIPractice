const express = require("express");
const app = express();
const port = 3000;
const recipesRouter = require("./routes/recipes.js");
/* Above declarations import express, set express as variable, 
set port as variable, and set recipes.js router path as variable.
CommonJS syntax.*/

// Root route.
app.get("/", (req, res) => {
  res.send("Hello World. You are accessing the Test Server.");
});

// Logger middleware function.
app.use(function (req, res, next) {
  console.log(`Requested path: ${req.path}.`);
  next();
});

// Scissors to open the .jsons.
app.use(express.json());

// Re-routes to recipes.js route handler.
app.use("/recipes", recipesRouter);

// Server live on port (declared 3000).
app.listen(port, () => {
  console.log(`App is listening on Port ${port}.`);
});
