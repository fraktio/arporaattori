import { put, select, call, takeLeading, all, delay } from "redux-saga/effects";
import {
  SET_VENUES,
  SET_REWARDS,
  SAVE_REWARDS,
  RANDOMIZE_START,
  RANDOMIZE,
  RANDOMIZE_END
} from "../ducks/arpo";
import venues from "../services/venue";
import { List } from "immutable";

const exponential = 1.025;
const slowdownStart = 1000;
const intervallos = 5;

function* saveRewards() {
  const rewards = yield select(state => state.arpo.get("rewards"));
  yield call(
    [window.localStorage, "setItem"],
    "rewards",
    JSON.stringify(rewards.toJS())
  );
}

function* loadRewards() {
  const rewards = yield call([window.localStorage, "getItem"], "rewards");
  if (!rewards) {
    return;
  }

  yield put({
    type: SET_REWARDS,
    payload: List(JSON.parse(rewards))
  });
}

function* randomize() {
  let interval = intervallos;
  const venue = yield select(state => state.arpo.get("venue"));

  let count = 0;

  do {
    count++;
    const randomizeIndex = yield select(state =>
      state.arpo.get("randomizeIndex")
    );

    let ai =
      venue.seats.count() === randomizeIndex + 1 ? 0 : randomizeIndex + 1;

    yield put({
      type: RANDOMIZE,
      payload: ai
    });

    yield delay(interval);
    if (count >= slowdownStart) {
      interval = Math.pow(interval, exponential);
    }
  } while (interval < 1000);

  yield put({
    type: RANDOMIZE_END
  });
}

export default function* rootSaga() {
  yield put({
    type: SET_VENUES,
    payload: venues.all()
  });

  yield* loadRewards();

  yield all([
    takeLeading(SAVE_REWARDS, function*(a) {
      yield call(saveRewards, a.payload);
    }),
    takeLeading(RANDOMIZE_START, function*(a) {
      yield call(randomize);
    })
  ]);
}
