import React from "react";

const Result = props => {
  const {result, search} = props;
  let message;

  if (result[0] === undefined) {
    message = "message is-small is-danger";
  } else {
    message = "message is-info";
  }

  return (
    <div>
      <article className={message}>
        <div className="message-header">
          <p> {result[0] !== undefined ? search : ""} </p>
        </div>
        <div className="message-body">
          {result[0] !== undefined
            ? result
            : "The word you are looking for does not exist."}
        </div>
      </article>
    </div>
  );
};

export default Result;
