mixpanel-theme
==============

generic mixpanel script for tracking themes, working draft

---

####Steps to make this work:

1. all links in the site that got to specific variations should have the ```data-mixpanel-variation``` attribute which contain the variation name
2. all links in the site that remove the top iframe (close buttons) should have the ```data-mixpanel-close``` attribute
3. all links in the site that got to the purchase page should have the ```data-mixpanel-purchase``` attribute
4. include the mixpanel tracking script on all pages
5. include the ```mixpanel.js``` file on all pages

---

####Dependencies:
A reasonable new jquery.

---

####Known issues:
Although steps to track the variation name for close and purchase buttons have been made, this requires a bit of extra work.
