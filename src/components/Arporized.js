import React from "react";

const Arporized = props => {
  const { rewarded } = props;
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Palkinto</th>
          <th>Paikka</th>
        </tr>
      </thead>
      <tbody>
        {rewarded.map((r, i) => {
          return (
            <tr>
              <td>{r.reward.title}</td>
              <td>
                rivi {r.seat.row}, paikka {r.seat.seat}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Arporized;
