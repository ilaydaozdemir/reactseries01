import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "#fff",
  };
  return (
    <header>
      <h1 style={headerStyle}>Grocies List</h1>
    </header>
  );
};

export default Header;
