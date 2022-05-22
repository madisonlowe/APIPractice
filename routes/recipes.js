import express from "express";
let router = express.Router();

import {
  getRecipes,
  getRecipeByID,
  //   searchRecipes,
  addRecipeByPost,
} from "../models/recipes.js";
/* Above code imports express, declares router, and imports recipes data.*/

// Below are the routers.
router.get("/", getRecipes);
router.get("/:id", getRecipeByID);
// router.get("?recipeName=", searchRecipes);
router.post("/", addRecipeByPost);

export default router; // Exports the router to be actively used for pathing.
