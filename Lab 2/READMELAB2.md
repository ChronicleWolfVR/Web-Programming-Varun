# Lab 2 - Varun Ravikumar

## Desciption
This lab is to create a fuction that handles an event on the html page. Here are the instruction

### Lab Descriptor

#### Handling Events
Write a JavaScript function to create an event handler that catches the "click" event over some content in a page and changes some style property of that element. Add some means of invoking the function to a page. Test your page is able to install the event handler when you invoke it and prove the event handler is triggered by appropriate events of its type after it gets dynamically installed.

#### Practice Exercises
Work through the following exercises to develop your understanding of Javascript and the API

https://www.w3resource.com/javascript-exercises/

Note: Attempt to solve the problems first (before looking at the solutions).

## Installation
Download the Lab 2 Folder and double click on the gitTestIndex.html file. This should open the webpage in you default browser

## Usage

When button is clicked:
```html
    <!-- Button that triggers the handleClick function -->
    <button id="Button" onclick="handleClick(event)">Click me</button>
```
This function is called:
```javascript
// Function to handle the click event    
function handleClick(event) {
  var target = event.target;
  target.style.backgroundColor = "red";
}
```
This should change the button element's background from white to red on the webpage.

## Contributing
This is a Heriot Watt Lab exercise which works towards a degree. Due to this being academic content, no pull requests are allowed.

## License
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)