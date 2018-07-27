# Angular-ToDo-Web-App

This is an Angular ToDo web application created using Typescript, CSS3, HTML 5, Bootstrap 4 and ASP.NET CORE REST API.
The app can perfom all the CRUD operations-for creating, reading, updating and deleting tasks. For the backend, 
I am using an ASP.NET Web API service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli/) version 1.7.4.

## Development server

Start the server using command -  `ng serve` or `npm start`.

## Steps to setup ToDo project 

1. Create an Ionic CLI project
2. Install below mentioned packages

    i. npm install --save bootstrap@4.0.0-beta
    
    ii. npm install --save @ng-bootstrap/ng-bootstrap

3. Update the angular-cli.json to include Bootstrap CSS

"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
