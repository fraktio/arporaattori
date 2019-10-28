import React from "react";
import styles from "./ControlPanel.pcss";
import Button from "./Button";
import { pure } from "recompose";

const ControlPanel = props => {
  const { reward, awardReward, randomize, randomizing } = props;
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{reward}</h3>

      <div>
        <Button
          disabled={randomizing}
          onClick={() => {
            randomize();
          }}
        >
          Arporoi
        </Button>

        <Button
          disabled={randomizing}
          onClick={() => {
            awardReward();
          }}
        >
          Palkitse!
        </Button>
      </div>
    </div>
  );
};

export default pure(ControlPanel);
