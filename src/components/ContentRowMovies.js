import React from "react";
import Cards from "./Cards";

let movies = {
  title: "Movies in Data Base",
  color: "primary",
  value: 21,
  icon: "film",
};
let awards = {
  title: "Total awards",
  color: "success",
  value: 79,
  icon: "award",
};

let actors = {
  title: "Actors quantity",
  color: "warning",
  value: 49,
  icon: "user",
};

let cards = [movies, awards, actors];
// console.log(cards)

function ContentRowMovies() {
  return (
    <React.Fragment>
      <div className="row">
        {cards.map((dataCard, index) => {
          return <Cards {...dataCard} key={dataCard + index} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default ContentRowMovies;
