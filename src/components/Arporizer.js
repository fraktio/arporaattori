import React from "react";
import styles from "./Arporizer.pcss";
import cx from "classnames";
import Button from "./Button";
import { Range } from "immutable";

class Arporizer extends React.Component {
  render() {
    const {
      venue,
      arpos,
      tempArpo,
      arpoing,
      doArpo,
      lockArpo,
      reward
    } = this.props;
    const lastArpo = arpos.last();

    const maxRow = venue.seats.maxBy(s => s.row).row;
    const maxPos = venue.seats.maxBy(s => s.position).position + 2;
    const rowRange = Range(1, maxRow + 1);

    return (
      <section className={styles.root}>
        {reward && (
          <div className={styles.rewardo}>
            <h3>
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
        )}

        <div className={styles.wrapperwrapperwrapper}>
          <div className={styles.wrapperwrapper}>
            <div className={styles.screenWrapper}>
              <div className={styles.screen}>
                <span>Screen</span>
              </div>
            </div>
            <div className={styles.wrapper}>
              {rowRange.map(row => {
                const classes = cx(styles.seat, styles.rowIndicator);
                const s = {
                  gridColumn: `${maxPos}`,
                  gridRow: `${row}`
                };

                return (
                  <div key={`row-${row}`} className={classes} style={s}>
                    {row}
                  </div>
                );
              })}

              {venue.seats.map(ss => {
                const s = {
                  gridColumn: `${ss.position}`,
                  gridRow: `${ss.row}`
                };

                const classes = cx(styles.seat, {
                  [styles.selected]: arpos.includes(ss) || tempArpo === ss,
                  [styles.lastSelected]: lastArpo === ss
                });

                return (
                  <div
                    key={`${ss.row}-${ss.seat}`}
                    className={classes}
                    style={s}
                  >
                    {ss.seat}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Arporizer;
