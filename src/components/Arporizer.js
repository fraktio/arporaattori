import React from "react";
import styles from "./Arporizer.pcss";
import cx from "classnames";

console.log(styles, "stails");

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
          <div>
            <h3>{reward.title}</h3>

            <p>
              <button
                disabled={arpoing}
                onClick={() => {
                  doArpo();
                }}
              >
                Arporoi
              </button>

              <button
                disabled={arpoing}
                onClick={() => {
                  lockArpo();
                }}
              >
                Palkitse!
              </button>
            </p>
          </div>
        )}

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
              <div key={`${ss.row}-${ss.seat}`} className={classes} style={s}>
                {ss.seat}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Arporizer;
