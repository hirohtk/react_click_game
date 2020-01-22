# react_click_game

### Core Technologies used:
- Node.JS
- Create-react-app: https://github.com/facebook/create-react-app
- React-bootstrap:  https://www.npmjs.com/package/react-bootstrap

### Description:

This is an app that functions as a "memory" game that displays a set of nine images.  The user is expected to click on an image, then
click on another image that is not the previous image that was clicked.  This repeats until the user chooses incorrectly, or clicks all
nine images without clicking the same image twice.  

Create-react-app package is used to set up a front end webpage utilizing the Bootstrap CSS framework in order to render the images 
using the "Card" bootstrap component.  Coincidentally these cards are also react components.  Images used for the cards are called by objects that reside in "pictures.json", and each object has a route pointing to a local image file as well as an "id".  The cards are rendered to the screen in a randomized fashion by a for loop each time the page loads, and each time the user clicks on a picture.  

The number of times a user clicks on a picture "successfully" increments their score.  If the user "loses" the game, this score resets.  There is also a "high score" that is updated every time the user passes their old high score.  Score is stored in state for redering on screen.  Every time the user "wins" or "loses" the game, there is a modal component that is triggered to notify the user.  

The following key properties are held in state:

    hoverClass: An array that stores a string representing a CSS class that applies a Transform: Scale() to each card when the user hovers     over the card.  The JS onMouseEnter and onMouseLeave methods are leveraged for applying these classes.  
    pointsScored: A number representing user score per game
    picturesClicked: An array that keeps track of which pictures a user has clicked per game, based on the picture's id.  
    highScore: A number representing user high score over a browser session.  
    message: A string that is displayed in the win/loss modal notifyig the user of a win or loss.
    messageColor: A string that references a CSS class to apply to this message
    open: A boolean that is passed down as a prop to the Modal Component in order to handle "showing" or "hiding" the modal.
