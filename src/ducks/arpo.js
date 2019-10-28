import { Map, OrderedSet, List } from "immutable";
import venues from "../services/venue";
import r from "../services/random";

export const SET_VENUE = "SET_VENUE";
export const SET_VENUES = "SET_VENUES";

export const SET_REWARD = "SET_REWARD";
export const SET_REWARDS = "SET_REWARDS";
export const AWARD_REWARD = "AWARD_REWARD";
export const ADD_REWARD = "ADD_REWARD";
export const REMOVE_REWARD = "REMOVE_REWARD";
export const SAVE_REWARDS = "SAVE_REWARDS";

export const RANDOMIZE_START = "RANDOMIZE_START";
export const RANDOMIZE = "RANDOMIZE";
export const RANDOMIZE_END = "RANDOMIZE_END";

const defaultState = Map({
  currentReward: 0,
  rewards: List.of(""),
  venues: venues.all(),
  venue: undefined,
  // reward: rewards.get(0),
  randomizeIndex: undefined,
  randomizeLast: undefined,
  randomizeTemp: undefined,
  chosenSeats: OrderedSet(),
  rewarded: List(),
  randomizing: false
});

export default function(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_VENUE:
      return state.set("venue", state.getIn(["venues", payload]));

    case ADD_REWARD:
      return state.update("rewards", r => r.push(""));

    case REMOVE_REWARD:
      return state.update("rewards", r => r.butLast());

    case SET_REWARDS:
      return state.set("rewards", payload);

    case SET_REWARD:
      return state.setIn(["rewards", payload.key], payload.value);

    case RANDOMIZE_START:
      const i =
        state.get("randomizeIndex") ||
        r.integer(0, state.get("venue").seats.count() - 1);

      return state.set("randomizeIndex", i).set("randomizing", true);

    case RANDOMIZE:
      return state.set("randomizeIndex", payload);

    case RANDOMIZE_END:
      return state.set("randomizing", false);

    case AWARD_REWARD:
      const seat = state.get("randomizeIndex");
      return state
        .set("randomizeLast", seat)
        .update("chosenSeats", a => a.add(seat))
        .update("rewarded", r => {
          return r.push({
            reward: state.getIn(["rewards", state.get("currentReward")]),
            seat: state.get("venue").seats.get(seat)
          });
        })
        .update("currentReward", r => {
          return r + 1;
        });

    default:
      return state;
  }
}
