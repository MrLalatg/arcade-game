# Arcade game clone

## How to run the game?

To run the game just run index.html in any browser u want.(Tested in Chrome)

## How to edit project?

###JS
All JS files are in the corresponding folder, there are three js files:

* Engine.js - This file provides the game loop functionality (update entities and render), draws the initial game board on the screen, and then calls the update and render methods on our player and enemy objects.
* Resources.js - This is simply an image loading utility. It eases the process of loading image files so that they can be used within your game. It also includes a simple "caching" layer so it will reuse cached images if you attempt to load the same image multiple times.
* App.js - This file provides our enemy and player functionality. Most of my work is here.

Also I am using bootstrap and jquery libraries here is links:

* [JQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)

###HTML
All HTML is stored in index.html file.

###CSS
CSS file is in the corresponding folder, I am also using some styles from [Bootstrap](https://getbootstrap.com/)

##Contributing
If u want to perform a pull request please do it in the right way. Here's the template:

1. Why u want to do this pull request?
2. Which files will be changed?

**ATTENTION** All pull request will be applied to `pull-request` branch, and maybe after some time to master.
Please be patient, we will consider your request as soon as possible