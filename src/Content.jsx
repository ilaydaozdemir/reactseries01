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
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click it</button>
    </main>
  );
};

export default Content;
