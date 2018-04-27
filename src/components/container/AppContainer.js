import { connect } from "react-redux";
import App from "../App";
import { doArpo, setVenue } from "../../ducks/arpo";

export default connect(
  state => ({
    lastArpo: state.arpo.get("lastArpo"),
    tempArpo: state.arpo.get("tempArpo"),
    arpos: state.arpo.get("arpos"),
    venue: state.arpo.get("venue"),
    arpoing: state.arpo.get("arpoing")
  }),
  {
    doArpo,
    setVenue
  }
)(App);
