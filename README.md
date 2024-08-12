# Rooms
Rooms is a small Remix CURD application for room booking. 
it's a self design while taking bits of styling from based off the google calendar app.

## Features

- CRUD events which then saved in postGresQL DB
- Multiple routes menu

## Requirements

- Requirement 1: List any software or tools needed.
- Requirement 2: Include any version requirements or dependencies.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/SimpleApp.git


Server File Finder
Server File Finder is a small JavaScript Client-Side component for checking if a file or directory exists at a given URL.

Components
main.js: Handles user input and displays the result in the web page.

serverCom.js: Responsible for sending requests to the server.

isValidURL.js: Contains a utility function to validate URLs.

requestThrottling.js: Implements request throttling to prevent excessive requests to the server.

How to Setup
Download and install Node.js from @Node.js website

Create a new folder and download all files to it.

Use the command-line interface to navigate to project directory

Run npm install

How to Run
Use command-line interface to run npm run start

Type input starting with 'http://mock-server/' - full folder/file tree is available in 'Under the hood' section

How to run the tests
Use command-line interface to run npm run test
Under the hood
isValidURL.js is checking whether the input string can be parsed into a valid URL class using new URL(input);. This function is limited to URL's starting with *:

requestThrottling.js limits the execution of the passed func to no more than once every delay milliseconds. It returns a new function that, when invoked, either returns undefined if called too soon or the result of func otherwise.

serverCom.js is checking whether the path leads to one of the files or folders in the tree below:

/
│
├── animals/
│ │
│ ├── dogs/
│ │ │
│ │ ├── sausage_dog.jpg
│ │ ├── supermodel_pup.jpg
│ │ └── ninja_chihuahua.jpg
│ │
│ └── cats/
│  │
│  ├── fancy_feline.jpg
│  ├── sassy_siamese.jpg
│  └── lazy_lion.jpg
├── food/
│ │
│ ├── fruits/
│ │ │
│ │ ├── magical_mango.txt
│ │ ├── banana_bandit.txt
│ │ └── orange_overlord.txt
│ │
│ └── vegetables/
│  │
│  ├── carrot_conqueror.txt
│  ├── tomato_terminator.txt
│  └── potato_paladin.txt
└── music/
 │
 ├── rock/
 │ │
 │ ├── air_guitar_anthem.mp3
 │ ├── headbanging_hero.mp3
 │ └── queen_of_riffs.mp3
 │
 └── pop/
  │
  ├── dancing_diva.mp3
  ├── melody_maverick.mp3
  └── bieber_fever.mp3