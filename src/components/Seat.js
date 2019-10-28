import React from "react";
import { pure } from "recompose";
import styles from "./Seat.pcss";
import cx from "classnames";

import { motion } from "framer-motion";

const variants = {
  selected: {
    scale: 1.25
  },
  unselected: {
    scale: 1
  }
};

const Seat = props => {
  const { seat, isBeingRandomized, previouslySelected, beenSelected } = props;

  const classes = cx(styles.seat, {
    [styles.selected]: beenSelected,
    [styles.lastSelected]: previouslySelected || isBeingRandomized
  });
  const s = {
    gridColumn: `${seat.position}`,
    gridRow: `${seat.row + 3}`
  };
  return (
    <motion.div
      animate={isBeingRandomized ? "selected" : "unselected"}
      key={`${seat.row}-${seat.seat}`}
      className={classes}
      style={s}
      variants={variants}
    >
      {seat.seat}
    </motion.div>
  );
};

export default pure(Seat);
