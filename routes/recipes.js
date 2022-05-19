const express = require("express");
const router = express.Router();
const recipes = require("../data.js");
/* Above code imports express, declares router, and imports recipes data.*/

// handles GET requests to /recipes path.
router.get("/", (req, res) => {
  const recipeName = req.query.recipeName;
  // Handles search queries to /recipes path.
  if (recipeName) {
    const searchedRecipe = [];
    for (let i = 0; i < recipes.length; i++) {
      if (
        recipes[i].recipeName
          .toLocaleLowerCase()
          .includes(recipeName.toLowerCase())
      ) {
        searchedRecipe.push(recipes[i]);
      }
    }
    const responseObject = {
      success: true,
      message: `Search results for recipeName string: ${recipeName}.`,
      data: searchedRecipe,
    };

    res.json(responseObject);
    return;
  }
  // Returns full array on GET request for all /recipes endpoint data.
  const responseObject = { success: true, data: recipes };
  res.json(responseObject);
});

// Returns GET request data for specific recipe ID.
router.get("/:id", function (req, res) {
  const searchedId = req.params.id;
  let searchedRecipe = {};
  for (let i = 0; i < recipes.length; i++) {
    if (Number(searchedId) === recipes[i].id) {
      searchedRecipe = recipes[i];
      break;
    }
  }
  const responseObject = {
    success: true,
    message: `Get recipe with ID ${searchedId}.`,
    data: searchedRecipe,
  };
  res.json(responseObject);
});

// Handles POST requests to add new data to the recipes array (only temporarily right now).
router.post("/", (req, res) => {
  const body = req.body;
  recipes.push(body);
  console.log(`Request made to push new recipe to recipes array.`);

  const responseObject = {
    success: true,
    message: `Add recipe called ${body.recipeName}, whose type is ${body.type}.`,
    data: recipes,
  };
  res.json(responseObject);
  console.log(responseObject.message);
});

// Exports the router, CommonJS.
module.exports = router;
