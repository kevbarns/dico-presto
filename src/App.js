import React, {Component} from "react";
import JsonFind from "json-find";

import logo from "./logo.svg";
import "./App.css";
import data from "./dictionary.json";

import Search from "./components/Search";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      res: []
    };
  }

  handleSearch(event) {
    const dico = JsonFind(data);
    event.preventDefault();
    console.log(dico.findValues(this.state.search));
    this.setState({res: dico.findValues(this.state.search)});
    console.log(this.state.res);
    
  }

  handleInput(event) {
    const searchWord = event.target.value;
    this.setState({search: searchWord});
  }

  render() {
    const {results} = this.state.res;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search
            search={event => this.handleSearch(event)}
            input={event => this.handleInput(event)}
          />
          {/* {results.map(oneResult => {
            return <Result res={oneResult} />;
          })} */}
        </header>
      </div>
    );
  }
}

export default App;
