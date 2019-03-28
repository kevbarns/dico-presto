import React from "react";

const Search = props => {
  return (
    <div className="content">
      <form onSubmit={props.search}>
        <div className="field">
          <label className="subtitle"> Search the English Dictionnary</label>
        </div>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={props.input}
              className="input"
              type="text"
              placeholder="Look for..."
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
