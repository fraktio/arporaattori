import React from "react";
import styles from "./Arporizer.pcss";
import RowMarkers from "./RowMarkers";
import ControlPanel from "./ControlPanel";
import Seat from "./Seat";

class Arporizer extends React.Component {
  render() {
    const {
      venue,
      chosenSeats,
      randomizing,
      randomize,
      awardReward,
      rewards,
      currentReward,
      randomizeIndex
    } = this.props;

    const reward = rewards.get(currentReward);

    const lastArpo = chosenSeats.last();

    const maxRow = venue.seats.maxBy(s => s.row).row;
    const maxPos = venue.seats.maxBy(s => s.position).position + 2;

    return (
      <section className={styles.root}>
        {reward && (
          <ControlPanel
            randomizing={randomizing}
            reward={reward}
            randomize={randomize}
            awardReward={awardReward}
          />
        )}

        <div className={styles.wrapperwrapperwrapper}>
          <div className={styles.wrapperwrapper}>
            <div className={styles.wrapper}>
              <div
                css={{
                  gridColumn: `1 / ${maxPos - 1}`,
                  gridRow: "1",
                  backgroundColor: "#ffffff",
                  textAlign: "center",
                  padding: "0.25rem",
                  color: "#000000"
                }}
              >
                <span>Screen</span>
              </div>

              <RowMarkers rows={maxRow} col={maxPos} />

              {venue.seats.map((ss, i) => {
                const beenSelected = chosenSeats.includes(i);
                const isBeingRandomized = randomizeIndex === i;
                const previouslySelected = lastArpo === i;

                return (
                  <Seat
                    key={`${ss.row};${ss.seat}`}
                    seat={ss}
                    beenSelected={beenSelected}
                    isBeingRandomized={isBeingRandomized}
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
