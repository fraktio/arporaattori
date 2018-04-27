import React from "react";

const Arporized = props => {
  const { rewarded } = props;
  return (
    <dl>
      {rewarded.map((r, i) => {
        return (
          <React.Fragment>
            <dt>
              rivi {r.seat.row}, paikka {r.seat.seat}
            </dt>
            <dd>{r.reward.title}</dd>
          </React.Fragment>
        );
      })}
    </dl>
  );
};

export default Arporized;
