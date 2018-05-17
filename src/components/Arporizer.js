import React from "react";
import styles from "./Arporizer.pcss";
import RowMarkers from "./RowMarkers";
import ControlPanel from "./ControlPanel";
import Seat from "./Seat";

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

    return (
      <section className={styles.root}>
        {reward && (
          <ControlPanel
            arpoing={arpoing}
            reward={reward}
            doArpo={doArpo}
            lockArpo={lockArpo}
          />
        )}

        <div className={styles.wrapperwrapperwrapper}>
          <div className={styles.wrapperwrapper}>
            <div className={styles.screenWrapper}>
              <div className={styles.screen}>
                <span>Screen</span>
              </div>
            </div>
            <div className={styles.wrapper}>
              <RowMarkers rows={maxRow} col={maxPos} />

              {venue.seats.map(ss => {
                const beenSelected = arpos.includes(ss);
                const isBeingArpoed = tempArpo === ss;
                const previouslySelected = lastArpo === ss;

                return (
                  <Seat
                    key={`${ss.row};${ss.seat}`}
                    seat={ss}
                    beenSelected={beenSelected}
                    isBeingArpoed={isBeingArpoed}
                    previouslySelected={previouslySelected}
                  />
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
