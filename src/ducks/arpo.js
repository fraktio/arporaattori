import { Map, OrderedSet } from "immutable";
import venues from "../services/venue";
import r from "../utils/random";

const startCount = () => r.integer(0, 333);

const exponential = 1.025;
const slowdownStart = 1000;

const arporator = (interval, dispatch, count = startCount()) => {
  console.log(interval, count, "i");
  if (interval >= 1000) {
    dispatch({
      type: "ARPO_LOCK"
    });
    return;
  }

  setTimeout(() => {
    dispatch({
      type: "ARPO_INCREMENT"
    });
    dispatch({
      type: "ARPO"
    });

    const increment =
      count < slowdownStart ? interval : Math.pow(interval, exponential);

    return arporator(increment, dispatch, count + 1);
  }, interval);
};

export const doArpo = () => {
  return dispatch => {
    const interval = 5;

    dispatch({
      type: "ARPO_BEGIN"
    });
    dispatch({
      type: "ARPO"
    });

    arporator(interval, dispatch);
  };
};

export const setVenue = i => {
  return {
    type: "SET_VENUE",
    payload: i
  };
};

const defaultState = Map({
  venue: venues.getVenue(0),
  arpoIndex: undefined,
  lastArpo: undefined,
  tempArpo: undefined,
  arpos: OrderedSet()
});

export default function(state = defaultState, action) {
  switch (action.type) {
    case "ARPO_BEGIN":
      const i =
        state.get("arpoIndex") ||
        r.integer(0, state.get("venue").seats.count() - 1);

      return state.set("arpoIndex", i).set("arpoing", true);

    case "ARPO_INCREMENT":
      return state.update("arpoIndex", ai => {
        const count = state.get("venue").seats.count();
        ai = ai + 1;

        if (ai > count - 1) {
          return 0;
        }

        return ai;
      });

    case "ARPO": {
      const seat = state.get("venue").seats.get(state.get("arpoIndex"));
      return state.set("tempArpo", seat);
    }

    case "ARPO_LOCK": {
      const seat = state.get("tempArpo");
      return state
        .set("lastArpo", seat)
        .update("arpos", a => a.add(seat))
        .set("arpoing", false);
    }
    default:
      return state;
  }
}
