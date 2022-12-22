# Introduction:

Hello.  My name is Matt Martino and I am bringing you an app I developed for my final capstone at Nashville Software School.  It is called Help Life Find a Way, and it is an app where users can keep track of their plant collection, and offer up their current plants clippings to other users to adopt. 

# Motivation
I was motivated to do this project because I have a hard time throwing away all my good plant clippings when I would rather just give them to people to enjoy.  When you take care of plants fairly well, you will be cursed with the burden of having to have to manage the plants growth.  Usually you trim the plant and throw away the extra bits, but I have always had a hard time with that.  A lot of it was from my zoo keeping days where I was in charge of managing the plant propagation station.  I would have to propagate plant clippings into new plants in order to keep the life in the exhibits more vibrant.  It was a lot of fun, and a lot of my old house plants are from clippings from the zoo, and because I have fond memories of these plants and the animals I had with them, that it is just so hard to throw away perfectly good plants!  So, I developed an app that would allow me to give them away to others.

# How does it work?

1. Login/register.
New users can register a new account with the classic django model, with the addition of a Help Life User model to store a little more information like user profile image, and a short bio about themselves.

2. Home page.
The home page view shows all the plants that have been uploaded to Help Life Find a Way.  It shows the plant image, the username of the plant owner, and then name of the plant that is a link that will bring up that specific plants details page.

3. Plant Details page.
After a user clicks on the plant name of one of the plants, it will redirect them to the plant details page.  Here the user can view all the information about the plant that the owner has put in for it.  It renders the plant image and below it it displays the plant care tips that the owner has selected for the plant.  It also renders the plant type that the owner selected for it as well.  

4. My plants page.
Here users will view all of the plants in their own collection.  This renders all the plants the user has created over the course of their time on my app.  If the user does not have any plants, it suggests that the user add some plants to their collection instead.  Each plant they have in their collection (if any) is a card.  Here users have multiple options with progression on the site.  

The first option is to delete their plant with the "I killed my plant" button.  This will remove it from the database, and have a "Sorry for your loss" window alert when they select it.  It's sad when your plants die, but it happens!

The second option is to clone the plant and make it available with the blue clone plant button.  This creates a clone of the original plant but assigns a new ID number to it.  The cloning comes into play as a way for users to share their plants with others.  This is after the plant owner propagates one of their plants, and it is setup for adoption.  Users can do to the available plants page to view and claim plants, but more on that later.

The third option is to view that plants details page after clicking on the link that is the name of the plant.  Similar to the previous plant details page, but because the user owns this plant they now have the option to edit it.  This is helpful if they wanted to change the name of their plant, update it's age or new plant care.  They can also add or remove the plant care tips as they become more aware of the plants needs.  They can also add or remove plant types if needed.  The removal of the care tips and plant types are handled with buttons that delete the entry in the database.  The rest of the information is filled out with forums, and checkboxes (for plant care tips and plant types).

5. Available plants page.
Here users can see the selection of available plants from other users.  Plants are made available when a user clones their plant.  When a user clones their plant, the boolean of available is set to true to then allow other users to know it is available.  When a user sees a plant they want to claim, they click the "Adopt this plant" button, and this sends an update request to the server that changes the user (owner of the plant), and marks the plant as unavailable.  This prevents others from claiming the same plant.

6.  Adding a new plant (creating a new entry).
When a user wants to add a new plant to their collection they click on "add new plant" in the nav bar.  After that they will be redirected to the forum to input the data for the plant.  Here they will input the plant name, plant age, and new plant care.  Users have the ability to upload a picture of the plant to show off it's beauty.  They then have the ability to specificity what the plant type and plant care tips are via checkbox selections for each of the two multi selects.  

Once the user fills out the information, uploads an image, and then checks all the checkboxes that they want to apply to their plant they can click the submit button that will fire off a chain of events.  First the plant is created in the database with it's relative information.  After that plant is created, we then make a post for each of the checkbox selections made by the user.  It is important to note that the plant needs to be created first in order to feed the checkbox criteria the plant_id that it needs to make that many to many relationship.  Each checkbox selection is an individual entry that can be removed later in the edit plant area.

7. All Users.
When a user clicks on the navbar link All Users they will be taken to the user view page.  Here the users are listed out by username, their bio, a count of how many plants are in their collection, and a link to view that said collection.  Clicking on the link to view a specific users plants will render the list of all their plants.  Here it will display the plant pic, the name, and the new plant care instructions.  





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
