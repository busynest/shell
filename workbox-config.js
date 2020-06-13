module.exports = {
  "globDirectory": "deploy/",
  "globPatterns": [
    "**/*.js",
    "index.html",
    "images/*.jpg",
    "images/*.svg"
  ],
  "swDest": "sw.js",
  "swDest": "build/sw.js",
  "globIgnores": [
    "../workbox-config.js"
};