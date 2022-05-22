import recipes from "../libs/data.js";

// GET all recipes
export function getRecipes(req, res) {
  res.json({ success: true, data: recipes });
  console.log(res.statusCode);
  return;
}

// GET recipe by ID.
export function getRecipeByID(req, res) {
  const id = req.params.id;
  let foundID = null;
  for (let i = 0; i < recipes.length; i++) {
    if (Number(id) === recipes[i].id) {
      foundID = recipes[i];
      break;
    }
  }
  res.json({ success: true, data: foundID });
  console.log(res.statusCode);
  return;
}

// handles GET requests to /recipes path.
// export function searchRecipes(req, res) {
//   const recipeName = req.query.recipeName;
//   if (recipeName) {
//     const searchedRecipe = [];
//     for (let i = 0; i < recipes.length; i++) {
//       if (
//         recipes[i].recipeName
//           .toLocaleLowerCase()
//           .includes(recipeName.toLowerCase())
//       ) {
//         searchedRecipe.push(recipes[i]);
//       }
//     }
//     res.json({ success: true, data: searchedRecipe });
//     console.log(res.statusCode);
//     return;
//   }
// }

// Handles POST requests to add new data to the recipes array.
export function addRecipeByPost(req, res) {
  const newRecipe = req.body;
  recipes.push(newRecipe);
  res.json({ success: true, data: recipes });
  console.log(responseObject.message);
}
