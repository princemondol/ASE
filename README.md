# ANIME SEARCH ENGINE (ASE)
![ASE UI](https://i.ibb.co/rsCY7Fc/ase.jpg)
## [Live Demo]()

### Table of Contents

1. [Architecture](#architecture)
2. [Quick Overview](#quick-overview)
3. [Get Started](#get-started)
4. [Application State](#application-state)
5. [State Manipulation](#state-manipulation)

## Architecture
![Application Architecture](https://i.ibb.co/7KM39xh/ASEarchitecture.jpg)

## Quick Overview
* The application is written in **Javascript's mordern ES6+ syntax** in a **modular** approach.
* All state related files can be found in *"src/state/"*
* All reusable components can be found in *"src/components/"*
* The application state is maintained using **REDUX**.
* For responsiveness, **BOOTSTRAP** framework has been used.
* **REDUX-THUNK** has been used to make async calls using REDUX

## Get Started
> * Clone the repository from https://github.com/princemondol/ASE.git
> * Open the directory in terminal and use **npm install**, to install all the dependencies.
> * After installing all the dependencies, use **npm start** to start the app locally, it automaticaly opens the browser @ localhost:3000
> * To deploy use **npm run build** to generate a production build and deploy.

## Application State

State Variable |	Initial State|	Comments
------|-----|-----
searchQuery |""| Stores the search string which is used to initialize search and to load more results
searchResults | { results: [], page: 1 } | Stores the search results, which is rendered on the UI, page property maintaining in page info while loading more results.
isLoading | false | Hooked up with loading spinner which helps in notifying the user that the app is loading data from backend


* The App component is nested within the *Provider* which gives it access to the **STORE**.
* **ACTIONS, REDUCERS and STORE** are in *src/state* directory.
* **Connect()()** is a higher order function which takes the component as the second argument and connects the STATE and ACTIONS using *mapStateToProps()* and *mapDispatchToProps()* respectively. 

## State Manipulation

Action/Thunk |	Arguments |	Comment
------|-----|-----
LOADING | - | Triggered on search helps us to show loading spinner on screen
UPDATE_SEARCH_QUERY | searchString | Triggerd when the user types in any new character to update **searchQuery**
SEARCH_SUCCESS | - | Triggered from **searchAnime** thunk on success, updates searchResults which has results and page.
SEARCH_FAILURE | statusCode | Triggered from **searchAnime** and **loadMore** thunk which shows appropriate message depending on status code.
LOAD_MORE | - | Trigger when user clicks on load more button from UI, based on searchQuery and page state it increments page property and make the request on success appends results on it on UI 
RESET_RESULTS | - | Empties the results array of searchResults state and reset the page count to 1, triggered when new search is triggered

