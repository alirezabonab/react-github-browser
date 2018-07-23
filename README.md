
**This project is written in React to demonstrate Github API browser according to assessment requested by some company.**

**Here is requirements :**

**Frontend Developer Test Assignment**

The aim of this test assignment is to build an App that connects to the Github API, shows the public repositories of a particular user and then retrieves their respective last commits.
Prerequisites
Create React App is a good starting point for a new React app:
https://github.com/facebookincubator/create-react-app
Required:
● Use redux as Flux-framework.
● Use at least 3 new features from ES6, ES7, es2015, esnext - or whatever it may be called
today. Add a comment why you have used the feature Optional:
● Use bootstrap (or similar framework) ***I have used material-ui***
● Style it!


**Task 1 - Connect to the Github API**

Connect to the Github API to retrieve the list of public repositories in your Github Account. Alternatively, use this account: ​https://api.github.com/users/facebook/repos
This results in a list of public Repositories. Visualize the results. You are free to choose any meaningful subset of data to show.

**Task 2 - Load last commits**

Once a list item has been clicked, start retrieving information about its last (20) commits. This can be done with the following call:
https://api.github.com/repos/facebook/react/commits
Where “facebook” (see Task 1) is the user and “react” the repository under consideration. Again, feel free to choose any meaningful subset of data to add to the row upon a successful response.

**Task 3 - Add a search for commit messages**

Add a search field to search for a commit message. Filter all messages which contain the search string.
Optional: Task 4 - Endless scrolling
Add endless scrolling for commits, ie., more than 20 commits can be loaded.*


--------------

**ES6 Features used in development : **

 - Constants
 - Block-Scoped Variables
 - Arrow Functions
 - Default Parameter Values
 - Spread Operator
 - String Interpolation
 - Custom Interpolation
 - Property Shorthand
 - Class Definition (vital requirement with react)
