# Practice Server Folder

This is a folder I made on 17th May 2022, in order to practice using node.js to build tiny servers, building up to APIs. This is built off of some of the exercises we've been doing in Week 4 of the School of Code bootcamp.

# Goals

X Create an app.js file.
X Initialise npm/node in this folder. This lets us use the node environment.
X Initialise express npm in this folder. Express is what will let us use node.js in order to turn our app into a server which can respond to requests.
X Set up a basic server inside the app.js folder.
x Create a data.js file.
X Store some data that I want to use in my server inside data.js.
X Export this data.
X In app.js, import the exported data.
X At the root path in my server, send a message on what the server is.

- At relevant data paths in my server, send different parts of my data.js object.
- Initialise git in this project folder.
  X Add my node_modules to a gitignore document.
- Commit and save my progress.

## 19th May Update

- Added middleware logger to app.js. Logs when a path is requested, what it is.
- Added scissors to open .json to app.js (gotta find out the real name for that).
- Added route handler for POST requests to /recipes to recipes.js.
- Tested it worked with Postman.
