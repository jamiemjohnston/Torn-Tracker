# Torn-Tracker
A web tool to manage and view data related to the online text-based RPG, Torn.com


# Technical Documentation

Install NodeJs from NodeJs Official Page

Open Terminal

Go to your file project (where you've unzipped the product)

Run in terminal

      > npm install

Then run

      > npm start

Or you can simply run

      > npm run install:clean

which will install node_modules and also will start your project.

If you have an error something containing

      > Module not found

you need to do the following

      > npm install --g cross-env

then change the script, for example the start script from

      > "start": "react-scripts start",

to

      > "start": "NODE_PATH=./src react-scripts start",


The same should be done with any other script that has the above error.
If you have an error containing

      > props.history of undefined

(this can happen when you integrate our project with another one) then you need to make the changes found here
