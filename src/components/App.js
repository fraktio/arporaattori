import React from "react";
import styles from "./App.pcss";
import Header from "./Header";
import Arporizer from "./Arporizer";
import Arporized from "./Arporized";

export default class App extends React.Component {
  render() {
    const {
      venue,
      doArpo,
      lockArpo,
      arpos,
      tempArpo,
      arpoing,
      reward,
      rewarded
    } = this.props;
    return (
      <div className={styles.root}>
        <Header />

        <Arporizer
          arpos={arpos}
          venue={venue}
          doArpo={doArpo}
          tempArpo={tempArpo}
          arpoing={arpoing}
          lockArpo={lockArpo}
          reward={reward}
          rewarded={rewarded}
        />

        <Arporized rewarded={rewarded} />
      </div>
    );
  }
}
