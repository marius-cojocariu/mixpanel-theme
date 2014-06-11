mixpanel-theme
==============

generic mixpanel script for tracking themes

this script will read some basic data attributes and send events to mixpanel when appropriate

---

####Steps to make this work:

1. all links that got to specific variations should have the ```data-mixpanel-variation``` attribute which contain the variation name
1. all links that remove the top iframe (close buttons) should have the ```data-mixpanel-close``` attribute and you can also include the ```data-mixpanel-variation``` attribute if this is known
1. for landing page tracking to work the landing page(s) should have at least one div with the property ```data-mixpanel-landing```
1. all links that got to the purchase page should have the ```data-mixpanel-purchase``` attribute and you can also include the ```data-mixpanel-variation``` attribute if this is known
1. include the mixpanel tracking script on all pages
1. include the ```mixpanel.js``` or ```mixpanel.min.js``` file on all pages

---

####Dependencies:
A reasonable new jquery.

---

####Build steps:

If you're downloading the zip file, the script is already build for you and the following will not work.

If you're cloning this repo, install node.js, then (within working dir) do:
```
$ npm install -g grunt-cli
$ npm install
$ grunt deploy
```
Other grunt tasks:
* ```$ grunt``` - default task which will build the minified script
* ```$ grunt watch``` - watches for changes and builds the minified script automatically
