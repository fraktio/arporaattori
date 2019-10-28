import React from "react";

const Header = props => {
  return (
    <div
      css={{
        position: "fixed",
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(0, 0, 0)",
        padding: "1em",
        top: "0",
        width: "100%"
      }}
    >
      <h1>Arporaattori</h1>
    </div>
  );
};

export default Header;
