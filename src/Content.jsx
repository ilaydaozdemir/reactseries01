import React from "react";

const Content = () => {
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
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClick2("ilayda")}>Click it</button>
    </main>
  );
};

export default Content;
