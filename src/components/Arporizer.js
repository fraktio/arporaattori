import React from "react";
import styles from "./Arporizer.pcss";
import cx from "classnames";

class Arporizer extends React.Component {
  arporize = () => {
    const { doArpo } = this.props;
    doArpo();
  };

  render() {
    const { venue, arpos, tempArpo, arpoing } = this.props;
    const lastArpo = arpos.last();

    return (
      <section className={styles.root}>
        <p>
          <button disabled={arpoing} onClick={this.arporize}>
            ARPOROI
          </button>
        </p>

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
