import { Fragment } from "react";

function Demo4({ name, address, city }) {
  return (
    <Fragment>
      <h1>{name}</h1>
      <hr></hr>
      <h2>{address}</h2>
      <hr></hr>
      <h3>{city}</h3>
      <hr></hr>
    </Fragment>
  );
}

export default Demo4;
