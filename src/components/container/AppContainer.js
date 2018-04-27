import { connect } from "react-redux";
import App from "../App";
import { doArpo, setVenue, lockArpo } from "../../ducks/arpo";

export default connect(
  state => ({
    lastArpo: state.arpo.get("lastArpo"),
    tempArpo: state.arpo.get("tempArpo"),
    arpos: state.arpo.get("arpos"),
    venue: state.arpo.get("venue"),
    arpoing: state.arpo.get("arpoing"),
    rewarded: state.arpo.get("rewarded"),
    reward: state.arpo.get("reward")
  }),
  {
    doArpo,
    setVenue,
    lockArpo
  }
)(App);
