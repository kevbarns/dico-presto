import React, {Component} from "react";
import JsonFind from "json-find";

import logo from "./logo.svg";
import "./App.css";
import data from "./dictionary.json";

import Search from "./components/Search";
// import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dico: JsonFind(data),
      search: "",
      result: []
    };
  }

  handleSearch(event) {
    event.preventDefault();
    const search = this.state.search;
    const dico = this.state.dico;
    const resultCopy = [...this.state.result];
    const res = dico.findValues(search);
    resultCopy.unshift(res);
    this.setState({result: resultCopy});
  }

  // this.setState({
  //   result: this.state.result.push(dico.findValues(this.state.search))
  // });

  handleInput(event) {
    const searchWord = event.target.value.toLowerCase();
    this.setState({search: searchWord});
  }

  render() {
    const {result} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search
            search={event => this.handleSearch(event)}
            input={event => this.handleInput(event)}
          />
          {/* <Result data={result} />; */}
        </header>
      </div>
    );
  }
}

export default App;
