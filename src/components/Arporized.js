import React from "react";

const Arporized = props => {
  const { arpos } = props;
  return (
    <ul>
      {arpos.map((a, i) => {
        return (
          <li key={i}>
            Rivi <strong>{a.row}</strong>, paikka <strong>{a.seat}</strong>
          </li>
        );
      })}
    </ul>
  );
};

export default Arporized;
