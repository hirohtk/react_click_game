import React from 'react';
import './App.css';

import Wrapper from './components/wrapper';
import Cards from "./components/cards"
import GameModal from "./components/modal";
import Jumbotron from "./components/jumbotron"

import pictures from "./pictures.json"

class App extends React.Component {

  // state controls ALL components below.  If needing to change state on a particular component, need to use an array for that state property
  state = {
    pictures,
    hoverClass: [],
    pointsScored: 0,
    picturesClicked: [],
    highScore: 0,
    message: "",
    messageColor: "",
    open: false
  }

  hover = id => {

    const newArray = [];
    for (let i = 0; i < this.state.pictures.length; i++) {
      if (id === this.state.pictures[i].id) {
        newArray.push("hover");
      }
      else {
        newArray.push("");
      }
    }
    // this new array will be made every time you hover, and the particular index of this array that matches the id
    // of the card being hovered will be "hover", which will trigger the css for transforming.
    this.setState({ hoverClass: newArray })

  }

  unhover = () => {
    // setting the entire array that handles the css classname for the hover transform to "".  no ID needed
    this.setState({ hoverClass: "" })
  }

  makeClick = (id) => {
    
    this.setState({ message: "" });
    this.setState({ messageColor: "" });
    
    
    // Lose condition
    if (this.state.picturesClicked.includes(id)) {
      this.setState({ pointsScored: 0 });
      this.setState({ picturesClicked: [] });
      this.setState({ message: "You Lose!  Try again" });
      this.setState({ messageColor: "redText" });
      this.setState({ open: true});
      console.log(`state is ${this.state.open}`);
      this.randomize();
    }
    else {
      this.state.picturesClicked.push(id);

      // Win Condition
      if (this.state.pointsScored === this.state.pictures.length) {
        this.setState({ message: "You Win!  Game is reset." });
        this.setState({ messageColor: "greenText" });
      }
      // Continue Condition
      else {
        // Update High Score Condition
        if (this.state.pointsScored === this.state.highScore) {
          this.randomize();
          this.setState({ pointsScored: this.state.pointsScored + 1 });
          this.setState({ highScore: this.state.pointsScored + 1 });
        }
        else {
          // Do not Update High Score Condition
          this.randomize();
          this.setState({ pointsScored: this.state.pointsScored + 1 });
        }
      }

    }
  }

  componentDidMount() {
    this.randomize();
  }

  randomize = () => {
    const newArray = [];
    let cap = this.state.pictures.length;
    // cap var is here to increase the length that the for loop runs, because.. my if statement "skips" an iteration if satisfied
    // starting cap at 9, and increasing by one if we ever "skip" 
    for (let i = 0; i <= cap; i++) {
      // RANDOM NUMBER is 0 through 8
      var random = Math.floor(Math.random() * 9);;
      // If this new array has nine members, end this function by setting state
      if (newArray.length === 9) {
        this.setState({ pictures: newArray });
      }

      else {
        if (newArray.includes(this.state.pictures[random])) {
          //console.log("existing instance, skipping...")
          cap++;
          continue;
        }
        else {
          newArray.push(this.state.pictures[random]);
        }
      }
    }
  }

  hideModal = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <Wrapper>
        <Jumbotron
        pointsScored={this.state.pointsScored}
        highScore={this.state.highScore}>
        </Jumbotron>
        <GameModal
        open={this.state.open}
        hideModal={this.hideModal}
        winOrLose={this.state.message}
        color={this.state.messageColor}
        >
        </GameModal>
        <div className="outerCardsContainer">
          <div className="cardsContainer">
            {
              // for each in pictures (WHICH IS AN ARRAY), give me an array of <Cards with these props inside> </Cards>
              this.state.pictures.map((pics, index) =>
                <Cards
                  route={pics.route}
                  id={pics.id}

                  hover={this.hover}
                  unhover={this.unhover}
                  // using the hoverClass array, use index number (index is the current index number in a map result array.
                  // This way, the hoverClasses are applied as they should be
                  hoverClass={this.state.hoverClass[index]}

                  key={pics.id}

                  makeClick={this.makeClick}
                  test2={this.test2}
                >
                </Cards>
              )
            }
          </div>
        </div>

      </Wrapper>
    );
  }

}
export default App;
