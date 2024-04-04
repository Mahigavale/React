import { Fragment } from "react";

export default function Product(props) {
  return (
    <Fragment>
      <h1>The Product for selling.</h1>
      <h2>{props.name}</h2>
      <h3>{props.desc}</h3>
      <h4>{props.price}</h4>
    </Fragment>
  );
}
export function Demo2() {
  return (
    <h1 style={{ color: "green", backgroundColor: "yellow" }}>
      the second component in the same file.
    </h1>
  );
}

export function Demo3() {
  return (
    <>
      <h1>Dadada</h1>
      <h3>Datadebugging</h3>
    </>
  );
}
