import React from 'react';
import './App.css';

import Wrapper from './components/wrapper';
import Cards from "./components/cards"

import pictures from "./pictures.json"

class App extends React.Component {

  state = {
    pictures
  }

  render() {
    return (
      <Wrapper>
        <div className="jumbotron jumbotron-fluid">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">Great.</p>
          <p>Yup.</p>
        </div>
        <div className="outerCardsContainer">
        <div className="cardsContainer">
        {
          // for each in pictures (WHICH IS AN ARRAY), give me an array of <Cards with these props inside> </Cards>
          this.state.pictures.map(pics =>
            
            <Cards
            route={pics.route}
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
