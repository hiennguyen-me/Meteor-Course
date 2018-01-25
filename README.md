/***METEOR***/

Link: https://www.meteor.com/
## 1. Setting Up
### Setting up your editor with plugins:
#### ATOM:
- Install package `language-babel`: support ES6 syntax
- Install  `language-javascript-jsx`: JSX language for React
- `meteor-api`
- `meteor-snippets`
#### Sublime text
- Tools -> Install Package control
- Shift + Ctrl + P -> Install Package -> Chose Package
- Install : babel, React JS, React ES6 Snippets , TernJS, Meteor Autocomplete

### Chrome plugins
- Install `React Developer Tools`,  `Meteor DevTools`

### Initial project setup with meteor and NPM
- 2 ways to create project
	+ `meteor create <name_app>`. Meteor will create one directory contains all of the files that we need to get a backend going, and then we're going to do most of front-end with React.
	+ create react app
- Run app: meteor
- NPM with meteor command, We have that command available to us with Meteor
- meteor npm install <name-package>
- Instal `react` and `react-dom`

### ES6 syntax
* ES5
- var myClass = React.createClass({
	render: function(){
		<div> Hello!! </div>
	}
})
* Es6
export default class myClass extend React.Component{
	render() {
	return <div> Hello!! </div>
    }
}

## 2. React Refresher: Basic Player View
### Members of the React team
- React is Js framework that helps us build big and fast web applications
- It's built on the principle that your Web app s composed of reusabel components
- 2 type of components: stateful or stateless
	+ Stateless: (or dumb) component doesn't do much on its own and needs a parent component to do s.th.
	+ Stateful: (or smart)

### File structure for React and Meteor
- Install package `material-ui`, `react-tap-event-plugin` with Meteor npm
- When has changes, Meteor will rebuild and restart the server and your client when you make changes on the client.
- Icon: https://google.github.io/material-design-icons/
- Roboto font: https://fonts.google.com/?selection.family=Roboto
- Materialize CSS: http://materializecss.com/getting-started.html
- Structure of folder for application:
	+ Delete client/main.js
	+ Create client/main.jsx, basiclly set up project with a Meteor startup and import a few things from React to make it work.
	+ New folder `imports` from root folder that contains:
		- UI folder:
			+ Create app.jsx : this is where most of code will reside
			+ Create Player.jsx: where our view of our player is going to be
			+ Create team-list.jsx: this is where we're going to list the players.
			+ Create team-stats.jsx: this is where we're going to have the stats for the team at the end of this course
		- API folder:
		- reason: separate into our own file structure. We will import other files using the ES6 module approach.
 + main.jsx
 	- Meteor.starup(): is basically a method that you can run anywhere in your project. If you run it in a client, it's going to run those files into the client. If you run into the server, it's going to run those files into the server.

### First layout the ES6 way
-
### Player components the ES6 way
- Link: http://www.material-ui.com/
- Material-ui provide us components, styles, help us design web more quickly.

### Set up static data
- `Props`: pass data in between a parent and a child component.
- `render()`: Must explicitly code on every statefull component.
### The state of our application

## 3. Reduce Player stats
### Meteor introduction
- Meteor is a full-stack framework where you can build an entire application using only what comes with the framework.
- Uses MongoDB for the database
- can extend it with external packages like Atmosphere, or MPM
- can explore thousands of packages at:  atmospherejs.com
### NPM introduction
### Yarn the Facebook package manager
- Yarn: tool replace for NPM
- It's much faster
- Install Yarn globally
- Run yarn: `yarn`
- `yarn add <name-package> : Install package with yarn

### React routing
- Install package `react-router`
- Import Router, Route, browserHistory from react-router  
- `browserHistory`:  allows us to basically know by the URL you're on, what is the URL, and if you click on the link to get to another page, it's going to know that it comes from the same URL.

### Creating a schema
- Install package `aldeed:collection2` by add `aldeed:collection2` in the end of file meteror/packages
- Create schema then attach schema to collection

### Creating a player form
- Create a form to add a new player in file imports/ui/new.jsx

### Functions to add a player
- Then add new player to database when form is submitted.
- `event.preventDefault();` prevent the browser to refresh and submit the page by doing this.

### Subscribe and publish
- Remove Autopublishpackage in meteor/packages: more secure
- Add `react-meteor-data` packages in meteor/packages: create a container which set up the state and load data from server.
- Install packages `react-addons-pure-render-mixin`
- propTypes: is a tool that comes with React that allows you to check that whatever is the object that we're passing to Players, into the state, is of what we expect, so is of type of what we expect.
- find({condition}, callback): is a basically method of the collection, find as many players as you see in the DB.
- subscribe(): It allows us to do database transactions securely

### Add a user login
- `meteor add accounts-ui accounts-facebook`: Add to meteor
- Install package `bcrypt` to Packages.json.
- meteor npm rebuild: rebuild packages and attached to my project, on the Meteor project
- <AccountsWrapper /> component:
	+ accounts-ui packages are not built for React.
- Blaze template
- Use Blaze to render
- Configure login Facebook
- Add URL of website

### Assign players to user
- Meteor.userId

### Securing our DB transactions with server methods
- Remove `insecure` package in meteor/packages
- Meteor.call('nameMethod', object, (error) => {});
- Create function insert, delete, update to DB at server/methods.js. It helps our app more securely.
- Insert to collection: collectionName.insert(Object);
- Add rule for collection: allow or deny

## 4. Players CRUD and Team View
### State and viewing a player on the full player view
- setState: is basically what updates the state and will be updating the current player with the player object that we've passed to it once we click on the TeamList.

### Editing players
### Deleting players
### Use Chart.js for team stats
### Wrapping up with CSS
