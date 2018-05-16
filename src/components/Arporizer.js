import React from "react";
import styles from "./Arporizer.pcss";
import cx from "classnames";
import Button from "./Button";

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
