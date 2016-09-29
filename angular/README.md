# thecavalierdani
Front-End application for CavalierDaily.com. Built on NodeJS, ExpressJS, and AngularJS.

### Getting started
- install NodeJS
- install npm (Node Package Manager)
- install bower

### Installing the packages
run `npm install` and `bower install`

### Setting up the environment
Create a file called `env.json` in your root folder that looks like this
```
{
	"ENV":  "DEV",
	"PORT": "5000"
}
```
yeah, that's all for now. We'll be adding more stuff once the app actually makes back-end API requests.

### Getting everything going
You'll need to run two commands at once to get a development environment running. In one terminal window, run `gulp default` to regenerate `public/` files and run a `watch` for front-end changes. In the other window, run `node app` to start the actual server. Then go to `localhost:5000/` in your browser.
