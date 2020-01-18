import React from 'react';
import './App.css';

import Wrapper from './components/wrapper';
import Cards from "./components/cards"

import pictures from "./pictures.json"

class App extends React.Component {

  // state controls ALL components below.  If needing to change state on a particular component, need to use an array for that state property
  state = {
    pictures,
    hoverClass: [],
    pointsScored: 0,
    picturesClicked: [],
    highScore: 0
  }

  hover = id => {
    //id is working as intended, but it is quite literally putting the hover class onto the id

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
    console.log(this.state.picturesClicked);
    if (this.state.picturesClicked.includes(id)) {
      console.log("game is over!");
      this.setState({ pointsScored: 0 });
      this.setState({ picturesClicked: [] });
      this.randomize();
    }
    else {
      this.state.picturesClicked.push(id);
      if (this.state.pointsScored === this.state.highScore) {
        this.randomize();
        this.setState({ pointsScored: this.state.pointsScored + 1 });
        this.setState({ highScore: this.state.pointsScored + 1 });
      }
      else {
        this.randomize();
        this.setState({ pointsScored: this.state.pointsScored + 1 });
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

  render() {
    return (
      <Wrapper>
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Clicky Game! </h1>
          <h1 className="display-5">Powered by Create-React-App</h1>
          <p className="lead">Points Scored: {this.state.pointsScored}</p>
          <p>High Score: {this.state.highScore}</p>
          
          {/* {
            // this is why .map() works- the way an array is rendered is quite simple, it's just all of the array values
            [1, 2, 3, 4, 5]
          } */}
        </div>
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
