import express from "express";
import recipesRouter from "./routes/recipes.js";
const app = express();
app.use(express.json());
const PORT = 3000;
/* Above declarations import express, set express as variable, set port as variable, and set recipes.js router path as variable. App.use(express.json()) lets us open .json files that are transferred through the whole file ecosystem. Refactored to ES6 syntax.*/

// Root route.
app.get("/", function (req, res) {
  res.send("Hello World! You are accessing the Root Path of the recipesAPI!");
  console.log(res.statusCode);
});

// Logger middleware function.
app.use(function (req, res, next) {
  console.log(`Requested path: ${req.path}.`);
  next();
});

// Re-routes to recipes.js route handler.
app.use("/recipes", recipesRouter);

// Server live on port (declared 3000).
app.listen(PORT, () => {
  console.log(`recipesAPI is listening on Port ${PORT}.`);
});
