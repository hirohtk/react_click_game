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
  }

  hover = id => {
    console.log(id);
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
    console.log(newArray)

  }

  unhover = () => {
    // setting the entire array that handles the css classname for the hover transform to "".  no ID needed
    this.setState({ hoverClass: "" })
  }

  test = (id) => {
    // this can become part of the basis for the game
    console.log(id);
  }

  componentDidMount() {
    this.randomize();
  }

  randomize = () => {
    let newArray = [];
    let cap = this.state.pictures.length;
    // cap var is here to increase the length that the for loop runs, because.. my if statement "skips" an iteration if satisfied
    // starting cap at 9, and increasing by one if we ever "skip" 
    for (let i = 0; i <= cap; i++) {
      // RANDOM NUMBER is 0 through 8
      var random = Math.floor(Math.random() * 9);;
      console.log("new loop");

       // If this new array has nine members, end this function by setting state
      if (newArray.length === 9) {
        console.log(newArray)
        this.setState({pictures: newArray});
      }

      else {
        if (newArray.includes(this.state.pictures[random])) {
          //console.log("existing instance, skipping...")
          cap++;
          continue;
        }
        else {
          console.log(`pushing picture ${random} into array`);
          newArray.push(this.state.pictures[random]);
        }
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">Great.</p>
          <p>Yup.</p>
          {
            // this is why .map() works- the way an array is rendered is quite simple, it's just all of the array values
            [1, 2, 3, 4, 5]
          }
        </div>
        <div className="outerCardsContainer">
          <div className="cardsContainer">
            {
              // for each in pictures (WHICH IS AN ARRAY), give me an array of <Cards with these props inside> </Cards>
              this.state.pictures.map(pics =>

                <Cards
                  route={pics.route}
                  id={pics.id}

                  hover={this.hover}
                  unhover={this.unhover}
                  // using the hoverClass array, re-use the id already coming from the json file 
                  hoverClass={this.state.hoverClass[pics.id - 1]}

                  key={pics.id}

                  test={this.test}
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
