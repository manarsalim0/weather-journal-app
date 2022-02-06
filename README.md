# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.



Mechanism of work in this project:
    1: When you click on the generate button, the server will obtain the data entered by the user
    2: The server makes sure that the data is accessed correctly. If an error occurs in the data access, it will show the error message
    3: The server checks the validity of the data entered into it with two functions : 
        checkIfZipCodeIsEmpty()
        checkIfFeelingsIsEmpty()
    4: The server saves the data
    5: The server sends a request with the zipcode data it obtained from the user to the API, and the API responds to it with the temperature of the entered zipcode area
    6: The server makes sure that the data reaches it correctly. If an error occurs in the data access, it displays the error message and an alert notice appears asking the user to verify the entered zipcode with zipCodeIsWrong() function .
    7 : When the data arrives correctly, the server saves this data
    8: The server updates the User Interface based on the data entered so that this data appears to the users.
