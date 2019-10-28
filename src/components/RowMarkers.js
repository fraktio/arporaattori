import React from "react";
import { pure } from "recompose";
import { Range } from "immutable";
import styles from "./RowMarkers.pcss";

const RowMarkers = props => {
  const { rows, col } = props;
  const rowRange = Range(1, rows + 1);
  return (
    <React.Fragment>
      {rowRange.map(row => {
        const s = {
          gridColumn: `${col}`,
          gridRow: `${row + 3}`
        };

        return (
          <div key={`row-${row}`} className={styles.root} style={s}>
            {row}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default pure(RowMarkers);
