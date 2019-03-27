import React, {Component} from "react";

class Result extends Component {
  render() {
    // const {result} = this.props;
    console.log("Result Cmp: " + this.props.data);

    return (
      <div>
        <h2>Coucou</h2>
        {this.props.data.map((oneResult, index) => {
          return (
            <li key={index}>
              <p> {oneResult} </p>
            </li>
          )
        })}
      </div>
    );
  }
}

export default Result;
