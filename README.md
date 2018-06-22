# Friend-Finder

### Overview

Friend Finder is a full-stack site that takes in results from the site user's survey, and compares their answers with those from other users. The app uses a modal to display the name and picture of the user with the best overall match. 


### Instructions

1. Answer the survey and clich the button to watch the modal toggle with your best match

2. The `server.js` file requires the basic npm packages needed: `express`, `body-parser` and `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This routes adds to the friends array in `friends.js`, the object that includes all the survey results from the new user. Then the         routes compares the users results against all other users in `friends.js` and returns the best match object.



