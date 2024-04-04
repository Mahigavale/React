import { Fragment } from "react";

function LocalTime() {
  const show = () => {
    let date = new Date();

    return date.toLocaleTimeString();
  };

  return (
    <Fragment>
      <h2>Please Click the below button to find the current time !</h2>
      <button onClick={(document.getElementById("demo").innerHTML = show())}>
        click me!
      </button>
      <h1 id="demo"></h1>
    </Fragment>
  );
}

export default LocalTime;
