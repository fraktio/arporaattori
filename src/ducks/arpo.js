import { List, Map, Range } from 'immutable';
import todoService from '../services/todo-service.localhost';

export const ARPO = 'ARPO';

import Random from 'random-js';
var r = new Random(Random.engines.mt19937().autoSeed());

export function doArpo() {
  return {
    type: ARPO,
  };
};

const elsis = {
  row: 10,
  seat: 23,
};

const seats = List()
  .concat(
    Range(1, 23).map(r => ({
      row: 1,
      seat: r,
    }))
  )
  .concat(
    Range(1, 27).map(r => ({
      row: 2,
      seat: r,
    }))
  )
  .concat(
    Range(1, 29).map(r => ({
      row: 3,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 4,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 4,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 5,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 6,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 7,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 8,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 9,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 10,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 11,
      seat: r,
    }))
  )
  .concat(
    Range(1, 31).map(r => ({
      row: 12,
      seat: r,
    }))
  );

const defaultState = Map({
  seats,
  arpo: undefined,
  firstArpo: true,
});

export default function (state = defaultState, action) {
  switch (action.type) {

    case ARPO:

      // Elsis will win the first time always as promised. <3
      if (state.get('firstArpo')) {
        return state
          .set('arpo', elsis)
          .set('firstArpo', false);
      };

      const arpo = r.integer(0, seats.count() - 1);
      const arpoed = seats.get(arpo);

      return state.set('arpo', {
        ...arpoed,
      });

    default:
      return state;

  }
}
