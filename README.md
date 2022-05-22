# Practice Server & API!

This is a folder I made on 17th May 2022, in order to practice using node.js to build tiny servers, building up to APIs. This is built off of some of the exercises we've been doing in Week 4 of the School of Code bootcamp.

## Goals

My first main goal is to create a working API that emulates pulling from a database by pulling from its own data library. I want the work to be clean and annotated, as a good reference point and learning resource for myself while I continue to learn more about back-end.

After I have accomplished this, and feel comfortable enough to change the direction of the repo, I hope to translate the API I build into a small project with more interactions, or branch off of it to make something new, leaving this as a well-documented reference piece for learning.

### First Build Log

- Create an app.js file.
- Initialise npm/node and express in this folder.
  - Npm lets us use the node environment to build.
  - Express is what will let us use node.js in order to turn our app into a server.
- Set up a basic server inside the app.js folder.
- Create a data.js file.
- Store some data that I want to use in my server inside data.js.
- Export this data.
- In app.js, import the exported data.
- At the root path in my server, send a message on what the server is.
- At relevant data paths in my server, send different parts of my data.js object.
- Initialise git in this project folder.
- Add my node_modules to a gitignore document.
- Commit.

### Second Build Log

- Added middleware logger to app.js. Logs when a path is requested, what it is.
- Added app.use scissors to open .json to app.js (gotta find out the real name for that).
- Added route handler for POST requests to /recipes to recipes.js.
- Tested it worked with Postman.

### Third Build Log

- Refactor code to use ES6 syntax.
- Add `type: module` to the package.json to make this syntax work.
- Test to make sure /models/recipes.js is imported, exported, and routed properly.
- Create a models folder.
- Create a recipes.js file inside this folder.
- Separate logic for the routers into the models folder in /models/recipes.js.
  - The models are a mechanism to interact with data and return what we need.
  - Our routers will use that to respond.
  - Separating concerns makes our code more organised and readable, and means we can make architectural changes more easily.
- Export functions from models.
- Create a libs folder.
- Move data.js into this libs folder.
- Refactor routes to make sure /libs/data.js is reachable.
- Import data from /libs/data.js to the models folder so the functions work.

### Review Code

Things to action:

- Get partially-written searchRecipes code up and running.
- Properly format HTTP status codes.
- Refactor or add to addRecipeByPost, so it generates an ID either if one is missing, or as a new addition to the recipes array.
- Add in DELETE and PUT functions.
