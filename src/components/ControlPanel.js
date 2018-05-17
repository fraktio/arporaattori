import React from "react";
import styles from "./ControlPanel.pcss";
import Button from "./Button";
import { pure } from "recompose";

const ControlPanel = props => {
  const { reward, lockArpo, doArpo, arpoing } = props;
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>
        {reward.id + 1}) {reward.title}
      </h3>

      <p>
        <Button
          disabled={arpoing}
          onClick={() => {
            doArpo();
          }}
        >
          Arporoi
        </Button>

        <Button
          disabled={arpoing}
          onClick={() => {
            lockArpo();
          }}
        >
          Palkitse!
        </Button>
      </p>
    </div>
  );
};

export default pure(ControlPanel);
