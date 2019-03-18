import React from "react";

const Search = props => {
  return (
    <div className="content">
      <form onSubmit={props.search}>
        <label> Search in the Dictionnary :</label>
        <br />
        <input onChange={props.input} type="text" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;

