'use strict';

// set to do list heading
const today = new Date();
const heading = <h1> To Do list for {today.getMonth() + 1}/{today.getDate()}/{today.getFullYear()} : </h1>;
ReactDOM.render(heading, document.getElementById('todoHeading'));
// set to do list


// set up for adding new items