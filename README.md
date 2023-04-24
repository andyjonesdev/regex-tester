# RegEx Tester

## Project Description
RegEx Tester is an application allowing users to test a regular expression against up to 10 test lines at a time. Results for the last test run are displayed for users to see, with matching lines colored green and failed lines colored red. Also, a history table displays the 7 most recent regular expressions and how many matches they yielded. Each time a user runs a regular expression test, the regex string and match count are persisted to a SQLite3 database instance. 

## Main View
!["main page view"](https://i.imgur.com/a91bTMB.png)

## Technologies and Dependencies Used
- PHP8
- Apache2
- SQLite3
- Javascript
- Ubuntu 22.04.2 for WSL 
- php-sqlite3
- libapache2-mod-php

## Features
- Users can enter a regular expression as well as up to 10 test lines to run regular expression matching against. 
- Users can view the lines that matched their regular expression and those that did not in the "Last Test Results" section
- Users can view their most recent 7 regular expressions and how many matches each yielded in the regular expression history table
- Users can click the "Clear fields" button to remove any text from the regular expression field and all test line fields
