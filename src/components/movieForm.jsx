import React from "react";

const MovieDetails = props => {
  console.log(props.match.params.id);
  return (
    <div>
      <h1>MovieForm {props.match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => props.history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
