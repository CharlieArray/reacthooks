import React, { useState } from "react";

function ButtonClick() {
  const [value, setButtonValue] = useState("unclicked");
  const handleClick = () =>
    value === "unclicked"
      ? setButtonValue((value) => "clicked")
      : setButtonValue((value) => "unclicked");

  return (
    <>
      <h1>Button Clicking Feature</h1>
      <button onClick={handleClick}>{value}</button>
    </>
  );
}

export default ButtonClick;
