import React from "react";

const Result = props => {
  const {result, search} = props;
  let message;

  if (result === undefined) {
    message = "message is-small is-danger";
  } else {
    message = "message is-info";
  }

  return (
    <div>
      {result === "" ? (
        <div />
      ) : (
        <article className={message}>
          <div className="message-header">
            <p> {result !== undefined ? search : ""} </p>
          </div>
          <div className="message-body">
            {result !== undefined
              ? result
              : "The word you are looking for does not exist."}
          </div>
        </article>
      )}
    </div>
  );
};

export default Result;
