// Libraries
import React, {Component} from "react";

// Misc
import logo from "../logo.svg";
import data from "../dictionary.json";

// Components
import Search from "../components/Search";
import Result from "../components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      result: ""
    };
  }

  handleSearch(event) {
    event.preventDefault();
    const {search, dico} = this.state;
    this.setState({result: data[search]});
  }

  handleInput(event) {
    const searchWord = event.target.value.toLowerCase();
    this.setState({search: searchWord, result: ""});
  }

  render() {
    const {result, search} = this.state;
    return (
      <section className="section">
        <div className="container flex-column align-items-center">
          <figure className="image is-128x128">
            <img src={logo} alt="logo" />
          </figure>
          <Search
            search={event => this.handleSearch(event)}
            input={event => this.handleInput(event)}
          />
          <Result result={result} search={search} />
        </div>
      </section>
    );
  }
}

export default App;
