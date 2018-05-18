import React from "react";
import { pure } from "recompose";
import styles from "./Seat.pcss";
import cx from "classnames";
import posed from "react-pose";
import { tween } from "popmotion";

const config = {
  selected: {
    scale: 1.25
  },
  unselected: {
    scale: 1
  }
};

const Div = posed.div(config);

const Seat = props => {
  const { seat, isBeingArpoed, previouslySelected, beenSelected } = props;

  const classes = cx(styles.seat, {
    [styles.selected]: beenSelected,
    [styles.lastSelected]: previouslySelected || isBeingArpoed
  });
  const s = {
    gridColumn: `${seat.position}`,
    gridRow: `${seat.row}`
  };
  return (
    <Div
      pose={isBeingArpoed ? "selected" : "unselected"}
      key={`${seat.row}-${seat.seat}`}
      className={classes}
      style={s}
    >
      {seat.seat}
    </Div>
  );
};

export default pure(Seat);
