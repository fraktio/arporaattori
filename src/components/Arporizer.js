import React from "react";
import styles from "./Arporizer.pcss";
import cx from "classnames";

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

        <table>
          <tbody>
            {venue.seats
              .groupBy(seat => seat.row)
              .sortBy((r, i) => i)
              .map((seats, rowNum) => {
                return (
                  <tr key={rowNum}>
                    <th className="index">{rowNum}</th>

                    {seats
                      .sortBy(s => s.seat)
                      .map(ss => {
                        const classes = cx(styles.td, {
                          [styles.selected]:
                            arpos.includes(ss) || tempArpo === ss,
                          [styles.lastSelected]: lastArpo === ss
                        });

                        return (
                          <td key={ss.seat} className={classes}>
                            {ss.seat}
                          </td>
                        );
                      })
                      .toList()}
                  </tr>
                );
              })
              .toList()}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Arporizer;
