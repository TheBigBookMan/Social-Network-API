# Social-Network-API

This back-end project was created to allow users to create a social-network profile and add/remove friends as well as creating a thought that could be reacted to by other friends. The thought could also be edited and removed whenever the user pleases.

## Live Demo URL

https://drive.google.com/file/d/1fuazNoiwaC0yIwVe8dadhd-wi-ZKHfyC/view

## Technologies

This was a back-end project and used the technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose

## Functionality

### Models

The models are setup into two different sections.

#### Users

The Users model allows the user to input a username and email address that they want to use. This is stored into the database through Mongoose, as the models are using a Mongoose schema. The User model also allows a friends list which is a self reference to the User model by having other users id entered into the database. There is also a thoughts section which is referenced to the Thoughts model, where users that create thoughts will have it stored within their database section. There is also a User virtual where users can find the number of how many friends they have.

#### Thoughts

The Thoughts model has a primary schema which contains user input from the thought text they want which also uses their username that was created from the User model by reference. The reaction subdocument is put into the reactions section of the Thought model and this contains the reaction body text and the username from the person who entered the reaction.

### Routes

There are two main routes that are used in the project.

#### User Route

The user root ('/users') route is for getting all users and creating a new user. The next route adds on the userId ('/users/userId') and they can now update their information in a body of information, get the information about this user id or delete the user with this id. There is also a friends route ('/users/userId/friends/friendId') where friends are added to the users friends list by reference of the friend id and the user id and they can also be deleted.

#### Thought Route

The thought root ('/thoughts') route is for getting all the thoughts posted and being able to post a thought with body information attached. There is then the id route ('/thoughts/thoughtId') which allows the user to get a singular thought, delete a thought or update a thought based on that thought id, which was created when the thought was entered. There is also a reactions route ('/thoughts/thoughtId/reactions') which allows there to be a reaction to the thought created that takes in the id of the thought they are reacting to with the body of the information in the reaction. They can also delete the reaction.

### Controllers

The controllers used Mongoose to be able to access the Mongo database with Node.Js and Express.JS.

## Github URL

https://github.com/TheBigBookMan/Social-Network-API
