import React from "react";
import { useState } from "react";

const Content = () => {
  //how to use useStateHook basic
  const [name, setName] = useState("Harun");

  //add arrow function with jsx
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Jack"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  //add click event
  const handleClick = () => {
    console.log("clicked");
  };

  //add click event with paramater
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  //add click event e
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClick2("ilayda")}>Click it</button>
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  );
};

export default Content;
