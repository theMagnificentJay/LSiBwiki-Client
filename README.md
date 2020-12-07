# LSiBwiki-Client
Land Soaked in Blood dark fantasy roleplaying setting wiki for information and lore.










The Land Soaked in Blood Wiki





Cohort #64







Table of Contents

Table of Contents
Mission Statement
User Stories
User 1: The guest
User 2: The Player
User 3: The Lore Writer
User 4: The Admin
Database
Tables
Endpoints
Features
Wireframe
Schedule
Final Notes



Mission Statement
The Land Soaked in Blood wiki is a collection of lore and information on a fantasy roleplaying world. The wiki would have character profiles and lore articles, (timelines, nations, etc.) that can be accessed for reference. An individual with a player account would be able to create a character here and be able to use and reference the Land Soaked in Blood lore information. An individual with a lore writer account will be able to edit and create lore articles. The admin will be responsible for administrative actions (account management) using the online gui, as well as the abilities all other accounts can do.

User Stories
User 1: The guest
	As a guest, the individual would be able to read and learn about the information that is available in the fantasy world of the Land Soaked in Blood. Guests do not need an account.

User 2: The Player
	As a player, the individual would be able to not only read and learn about the information that is available in the fantasy world but also be able to create and manage a player character to use in this world. Requires a Player account.

User 3: The Lore Writer
	As a lore writer, the individual would be able to edit and create lore articles and submit them to be displayed on the webpage. A lore writer would be able to help create the world and expand it. Requires a Lore Writer account.

User 4: The Admin
	The Admin would be the head of the operation and have the ability to adjust/manage user accounts and manage the wiki through the website gui. Requires an Admin account (only one admin).

Database
This is where you write out what your database will look like. List out each table, the columns (include the dataTypes), and the database associations your project will have on the server-side.
Tables
Users

ID
FirstName
LastName
Email
Password
num
string
string
string
string



Table 1

Player Account created Characters for use in the Land Soaked in Blood
ID
CharacterName
Info (Race, Age, Class, etc.)
Biography
Alignment
Account Type
num
string
string
string
string
string/number?


Table 2

Lore Writer Accounts created Articles for use in the Land Soaked in Blood
ID
Lore Title
Article Information
Category
Date Submission
Account Type
num
string
string
string
string
string/number?


Table 3

Admin Account that can see the list of accounts and promote/demote them accordingly
ID
FirstName
LastName
Email
Account Type
num
string
string
string
string/number?


Additional Tables

Endpoints
Here’s an example of a collection of endpoints for a single table:

Users: ~/api/users
GET/userInfo/:id		=> Get user by ID
POST /register		=> Registers new user account
POST /login		=> Logs in a user

Users: ~/api/players
GET/userInfo/:id		=> Get user by ID
POST /createCharacter	=> Creates a Player Character for use in the rpg
POST /infoStats		=> Creates the statistics of the created character
POST /bio			=> Creates the bio for the created character
POST /alignment		=> Creates the alignment for the character [alignement tracker]
POST /accountType	=> Account Type / Rank

Users: ~/api/lorewriters
GET/userInfo/:id		=> Get user by ID
POST /article		=> Creation of new Article
POST /category		=> Designates the category of the created article
POST /date		=> Function to date the submission of the article
POST /accountType	=> Account Type / Rank

Users: ~/api/admin
GET/userInfo/:id		=> Get user by ID
POST /accountType	=> Account Type / Rank

Features
Features are instances or examples of different pieces of functionality. This is where you list out the features you are planning on implementing. Consider the different steps and logic those features required to do the expected job. This could include fetching data from a 3rd party API or simply looping over data from your server. Differentiate between your version 1.0 or MVP (minimal viable product) and version 2.0 or stretch goals. 

Version 1.0 / MVP
Version 2.0 / Stretch Goals
Users can create accounts
Users can comment on articles/discussion board/ Discord API connection
Player accounts can create characters and save their information to their accounts Stretch Goal?
Lore Writer accounts can edit articles and create new ones that all other accounts can access
Admin accounts can adjust the rank of created accounts
Wiki with categorised list and accessible articles
Editable entries

Users can reset passwords
Character creator that uses the dnd api that would then display a character sheet unique to the fantasy world
Dice Roller that automatically inputs the generated numbers into the article or sheet
Random NPC, Town, and Monster creator



Data Flow

Wireframe


Note: A layout mockup I am confident in. Categories, and main content are separately scrollable. This preview is on Linux so some aspects don’t render properly as of yet. Scroll bars are supposed to be hidden.

Color blind simulator ***
Schedule
Benchamarks
paletton.com

Day 1
Day 2
Day 3
Day 4
Day 5
Day 6
Day 7
Wireframe
Wireframe/Dataflow
Wireframe/Dataflow
User Accounts/Creation of Users
User Accounts/Creation of Users
User Accounts/Creation of Users
Default Articles and Character Profiles
Day 8
Day 9
Day 10
Day 11
Day 12
Day 13
Day 14
Default Articles and Character Profiles
Default Articles and Character Profiles
Player Account Features and CRUD
Lore Writer Features and CRUD
Lore Writer Features and CRUD
Admin Features and CRUD
Admin Features and CRUD
Day 15
Day 16
Day 17
Day 18






Finalize desktop stylings and mobile stylings
Finalize desktop stylings and mobile stylings
Deploy

*more time
Final Changes and Fixes







Final Notes
Great job with planning! You are now set to start coding. Planning a project is incredibly beneficial to your success and the success of your project. Here are some resources to help you with your planning.

How to plan a web application
Step By Step: Planning a web application

