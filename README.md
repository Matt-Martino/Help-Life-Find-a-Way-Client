# Help Life Find a Way.

An application for users show off their cool collection of plants with pictures of the plants, tags of plant types, and care tips associated with the plant.  Users also have the ability to share their plant offspring with other users because that is the heart of the app.  


# Introduction:

Hello.  My name is Matt Martino and I am bringing you an app I developed for my final capstone at Nashville Software School.  It is called Help Life Find a Way, and it is an app where users can keep track of their plant collection, and offer up their current plants clippings to other users to adopt. 


# Motivation
I was motivated to do this project because I always have a hard time throwing away my plant clippings. When you take care of plants fairly well, you will be cursed with the burden of having to have to manage the plants new growth.  Usually you trim the plant and throw away the extra bits, but I have always had a hard time with that.  A lot of it was from my zoo keeping days where I was in charge of managing the plant propagation station.  I would have to propagate plant clippings into new plants in order to keep the life in the exhibits more vibrant.  It was also a way to keep the rare plants going long term.  It is a lot of fun, and a lot of my household plants are from clippings from the zoo. I have fond memories of these plants and the animals I cared in the same exhibits that it is just so hard to throw these perfectly good plants away!  So, I developed an app that would allow me to give them away to others, and feel glad that life is finding a way to survive. 


# How does it work?

1. Login/register.
New users can register a new account with the classic django model, with the addition of a Help Life User model to store a little more information like user profile image, and a short bio about themselves.  User profile image will be rendered throughout the page as a symbol of an individual, and a bio can be viewed on the All Users page.  


2. Home page.
The home page view shows all the plants that have been uploaded to Help Life Find a Way.  Here it renders each plant like a card with the same information displayed on each plant.  It shows the plant image, the username + profile image of the plant owner.  The name of the plant that is a link that will bring up that specific plants details page.


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


8. Edit your profile.
When a user wants to update their bio from their initial input upon registering, they can navigate to this page to do that.  This page will pull up their old bio, and allow users to change it if they please.  Here users can upload a profile image as well as change their current one.  


# How was it developed

Initial concept on Help Life Find a Way was thought up when I was brainstorming ideas for my final capstone while tending to my plants.  I was trying to think of something that would require management of an inventory somehow, and ended up trimming one of my plants and setting the clipping up to be an individual plant for one of my family members who liked the flowers.  This gave me the concept to develop the rest of the project around.  Time was spend now working on the ERD and how all the data would interact with each other.  After I had a good idea of how the data would relate to each other I then drew uo a wireframe to sculpt the look of how I would like it to look.  

After planning what I wanted to do and how it would look, the app was then designed and developed in stages.  The first stage I used a pervious project from NSS called "Level Up" to help guide me through a new project setup.  It helped guide me through the set up the client with the creation of a new Django project.  I downloaded and installed all the tools I would need to develop this project in accordance .  The first functionality on the client side I worked on was basic register and login capabilities, along with the basic CRUD elements of the backend.  After initial registration and good functionality for the backend CRUD, I set up some fixtures to be able to test data.  This helped me have some workable data to help test the functionality of the new features I was implementing as they were getting finished up.  The data helped me test the features once they were complete enough, and to help work out bugs.

Each feature was implemented one at a time.  I decided to focus on one working piece at a time and make sure that the newest feature did not break the previous ones.  Testing after each feature always led to some interesting bugs, but turned out to be some of my most memorable moments from the project.  

Initially, I made myself some tickets to go off of but ended up using my hand written notes to follow along.  Looking back, I feel they were a good guide and helped me stay on task in order to finish up one idea before starting another.  This really helped me stay on track and reach MVP for the project without having to go back a redo what was already completed.



# How to install and run the application

1. Clone the client here : 
https://github.com/Matt-Martino/Help-Life-Find-a-Way-Client

2. Clone the server here: 
https://github.com/Matt-Martino/Help-Life-Find-a-Way-Server

3.  Navigate to  the server directory. 

Launch your virtual environment with command ```pipenv shell ```

Launch vs code with ```code . ```

If you'd like to view the data in vs code than...
Open the SQL database to view data with ``` ctrl + shift + p ``` and select ```SQLite: Open Database ``` and select ``` db.sqlite3```

Run the debugger ``` ctrl + shift + D ```

4. Navigate the the client directory.
Run ``` npm start ``` to launch the React Client.

5. Register a new user, or use the fixtures to load the preexisting users info.
Create, edit, or kill off some plants!  Have fun, and enjoy the hand drawn plants!



# Difficulties & challenges faced during process.

1. I think the biggest difficulty I faced with this project was when I was trying to think of a way to handle the edit plant functionality with regards to the many-to-many relationships of plant care tips and plant types.  Each of these "tags" has a many-to-many relationship with plants, and allowing the user to change them when they wanted was my largest blocker.  I initially did not have a good plan on how I wanted to handle the removal or addition of new tags, but I do remember that Friday night when I broke through and figured out at least one method.  

    I felt the addition to remove or add to these tags was a key feature to have when editing a plant, so I had to think of how I could do that.  The "tags" are set up as a set, to not allow duplicate instances of the same tag from being submitted from the client.  I thought it was very important to keep no duplicate data.  When users select more tags with the checkbox selections, and hit the update plant button the client then sends a POST for each of the items in the set.  My initial problem with this was that I needed to prevent the server from creating an already existing relationship when that updated set was sent with prior sets included in.  So, I wrote some backend code that searched the database for an existing  pair of the foreign keys needed to make this relationship, and if it existed to not create a new one when these requests were made.  This allowed me to add new "tags" without adding already existing ones again.  Now to remove them, I decided to map over the relationships that the plant already had, and used a button to send a delete request to the server when that specific relationship button is clicked.  Both care_tips or plant_types behave the same way in this.

    This did solve my initial problem with being able to add/remove these relationships, and also prevent duplicate data.  I thought the prevention of duplicate data to be an important thing to combat and prevent.  It might not be the most efficient method out there, but I do feel it is a good representation of my problem solving skills.


2.  Newly created users we're not recognized on first login after creation.
    
    This was a fun bug I found while testing things.  I found that a newly created user did not have their specific auth token assigned appropriately after the initial creation of the user account.  In other words, it would not refresh the token from the previous logged in user if a new user was created.  Users had to logout and log back in again to have their help_token correctly assigned, and this prevented me from rendering edit plant buttons if they never logged in or out again.  In order to combat this, I added the username to the localStorage that was used as a check in order to properly display the edit plant button vs using the help_token to run this check.  Users now can create a new account and all the information on the site will render correctly without the need to log out and log back in after initial creation.  This does seem like a minor detail, but I thought it was an interesting one.  It did stump me at first because I could not understand why other users plants were being rendered on the my plants page after creating a new user, but I did find a workaround to it.  This was another part of my project that I felt joy from.  It was defiantly a minor bug, but I am proud I noticed it, and found a way around it to help my new users.


3. Project management.

    Like most beginners, it is always a bit hard designing something from the ground up.  Overthinking things such as design, data relationships, bugs, and not core features are all too common.  I think I do a good job of staying on task with my current objective but did find myself thinking ahead from time to time.  Mostly when working on a feature that will play off of the future one, but that always helped out in the end.  I feel I spent a 60/40 split on thinking and planning to coding / testing / bug fixing.  I would like to spend more time thinking about the whole picture more before starting to code, but I think I got too excited about the project and started a half day sooner than I should of.  I think with more experience I will develop this skill, and get into a better rhythm for my own coding style and the project.  A certain familiarity with the process will go a long way, and can only help me with the whole process.  It would also be nice to see and follow along a more experienced leader develop a project, and I feel that would be the best for me to learn better methods, or at the very least show me alternate paths with how to solve initial problems.  I do tend to learn a lot from watching peoples thought patterns, and how they go about things.  Another perspective is always handy.  All in all though, I thought I did well with the planning, but one can always be better at planning and that just takes time and experience.


4. Styling and applying a users experience to my app.

    I have been learning Bulma for this and learning how to use it has made me reflect on how a user would use this app with my decisions on styling.  Once I figured out the layouts for how Bulma work with layers, I was able to apply a similar look and feel throughout the app very easily.  Bulma definitely made it super easy to transfer a similar look with using the same ladder of div's.  I wanted a nice clean look that was very minimal.  I am not super flashy.  Transferring all the pages on the app over the a similar feel and style made me reflect on how a more uniform look will make it easier for the new users to get a feel.  Knowing information links are always on top, despite the different ways to seek the information is a smart architecture choice.  I found most of my design ideas were from navigating around the app and getting a better feel of things and putting the pieces that felt the best for uniform and flow.

