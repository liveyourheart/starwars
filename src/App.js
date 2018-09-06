import React, { Component } from "react";
import CharacterList from "./components/characters/CharacterList";
import CharacterDetail from "./components/characters/CharacterDetail";
import Home from "./components/home/Home";
import FilmList from "./components/films/FilmList";
import Header from "./components/shared/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <div className="header">
              <Header />
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={CharacterList} />
            <Route exact path="/characters/:id" component={CharacterDetail} />
            <Route exact path="/films" component={FilmList} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
