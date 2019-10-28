import React from "react";

const Centerer = props => {
  const { children } = props;
  return (
    <div
      css={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgb(255, 255, 255)",
        textAlign: "center"
      }}
    >
      <div
        css={{
          width: "800px"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Centerer;
