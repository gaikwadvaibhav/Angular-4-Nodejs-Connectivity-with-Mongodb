# Blankproject2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


********LINK REF************ => 20-01-2018 -> 11:53PM
https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
**************///***************************


MongoDB - usually acts as the database for your application, in case you need to persist data. It's where we store records.
ExpressJS - is a web framework for nodejs, usually used as a backend for web apps in the MEAN stack.
Angular - is usually the client side MVC web framework. In this case, we will be using Angular 2.*.
NodeJS - powers express, and will be the layer our server run on.

*******************************Commands*********************************************

1. Create angular project - ng new projectName
2. Adding Express -
		npm install --save express body-parser
3. create - server.js   AT DIST FOLDER LEVEL
	 - paste code from above link server.js
4. create-  server/routes/api.js
	- paste code from above link api.js
5. RUN- ng build
6. RUN- node server
7. RUN ON BROWSER -
	Going to http://localhost:3000 should load the app, and http://localhost:3000/api should show as below.


************** connectivity with mongodb database *********************
8. npm install mongoose --save or npm install mongodb --save

9. server.js -past below code and import mongoose in require.
	/*
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/secondNodeTest";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  console.log("Database connn created!");
	  db.close();
	});
	*/

10. npm install -g nodemon --save   ==> TO AUTO RUN NODE SERVER AND AUTO CHANGE DETECT
		-> nodemon server
11. post/ get / put / delete operation

