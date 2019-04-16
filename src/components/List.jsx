import React from "react";

const List = ({ events }) => {
  const list = events.map(({ name, url, _embedded }) => {
    let { venues } = _embedded;
    venues = venues.map(venue => {
      return (
        <div>
          <p>{venue.address.line1}</p>
          <p>{venue.city.name}</p>
        </div>
      );
    });
    return (
      <div>
        <h2>{name}</h2>
        <p>{url}</p>
        {venues}
      </div>
    );
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default List;
