"use strict";

// About your game
settings.title = "Cloak of Darkness";
settings.author = "The Pixie"
settings.version = "0.3";
settings.thanks = [];

settings.libraries = ["saveload", "text", "io", "command", "defaults", "templates", "world", "parser", "commands"],  // 

settings.panes = 'none'

settings.roomTemplate = [
  "#{cap:{hereName}}",
  "{hereDesc}",
  "{objectsHere:You can see {objects} here.}",
]

