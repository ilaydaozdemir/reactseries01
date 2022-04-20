import React from "react";

const Content = () => {
  //add jsx
  const name = "ilayda";

  //add arrow function with jsx
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Jack"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <p>{name}</p>
    </main>
  );
};

export default Content;
