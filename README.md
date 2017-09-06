# Module 3 group project #
__Submitted by: Team Beam__

__Team members:__

* Zoe Ji - jixxx181@umn.edu
* Bob Liu - liux3401@umn.edu
* Alejandro Peces-Barba - peces001@umn.edu


__Heroku URL:__ limitless-harbor-62773.herokuapp.com/

Please test in Chrome. Existing credentials might be useful for testing:
username - zoe
password - thisiszoe

__Argument of ambition:__

_In this project we have properly used everything we have been learning throughout the course. Communication client-server using Express, use of a database for storing and querying information, and all this taking advantage of the ReactJS framework and Node. 
Our project is based on collecting, manipulating and retrieving data from iOS apps. We implemented user authentication in order for the users to store their own wishlists. Other functionalities that prove this project’s ambition are different uses of MongoDB for either the authentication and app querying, and creation of our own API for retrieving data from AppStore._

__Argument of execution:__

_As said previously, the Beapp is using ReactJS, one of the main features of it is its particular use of the DOM. At the beginning, when we were not use to the framework, we encountered more challenging. However, as far as we kept using it we started to think in ReactJS. Something that can be checked in a simple review is that we have used just one component per file in order to not mess up the content, as recommended. Finally, we have made use of the different languages and features provided by the framework, such as JSX, ES6 or MongoDB syntax in order to achieve our goals._

## Description ##
The group project for module 3 is to create a website for collecting and organizing content.

Some sites that can serve as inspiration:

- pinterest: users save images to "boards".
- pocket and delicious: users save and organize URLs
- zotero: users save academic articles, organize them into groups, tag them, and export them in various formats
- reddit and hackernews: users post, vote on, and discuss URLs

Generally, these sites allow users to (a) collect content into collections, lists, or tags, (b) annotate the content with additional information, and (c) browse and search for other information on the site.

We encourage you to build a site to curate content that's interesting to you. Ideas:

- Airbnb rentals
- NPM packages
- Amazon products
- NES ROMs


## Requirements ##

- Build a site on react, express, and mongo. Host the site on heroku.
- The site must allow users to:
  - Add new content.
  - Edit existing content, e.g., by changing its description or giving it a descriptive tag
  - Delete existing content
- The site must allow the content to be organized.  E.g., collections, lists, or tags.
- The site must allow users to browse the site in a reasonable way via links.


### Encouraged, but optional ###

- Content import via identifier (e.g., URL). Many interfaces (Facebook, Slack, Pocket) allow users to add links, which the site then parses to find some content (e.g., a title, an image). Allow your users to do something similar.
- Search. Add a site-search feature that allows users to find content. It does not count to add a google site search box :)  This could, for example, be an autocomplete widget that shows tags, or an open-ended widget that searches the text of imported items.
- Multi-user support.  Allow multiple users to independently contribute content.  There is no need for full authentication, but you could allow users to "log in" by typing a username.  You could simply track and display activity by user, or to be more ambitious, you could give different users different views (e.g., the homepage shows the logged-in user's collections).
- Responsive design. Make the site render in a usable way on an iphone 7 (or equivalent).


## Submission ##
- Your code should be pushed up to your repo on github
- Fill this `README.md` out with your team name, team members' emails, and
- Heroku url for your demo. Additionally, complete the argument sections at the top of the file.


## Grading ##
You will be graded on the __ambition__ and __execution__ of the project. At the top of this `README.md` you have the opportunity to argue why your submission was ambitious and well executed. In order for us to grade it, you must have it hosted on Heroku. To earn an "A" grade, a project must be technically ambitious, well-executed, and polished. To earn a passing grade, a project must minimally fulfill the three requirements listed in the description.
