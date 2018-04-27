import { List, Range } from "immutable";

const seatsPerRow = List([
  List([
    23,
    31,
    33,
    34,
    36,
    38,
    40,
    42,
    42,
    42,
    40,
    40,
    40,
    38,
    36,
    32,
    28,
    11,
    9
  ]),
  List([22, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30])
]);

const seatsForRow = (row, seats) => {
  return Range(1, seats + 1).map(r => ({
    row: row,
    seat: r
  }));
};

const venues = [
  {
    name: "Scape",
    seats: seatsPerRow
      .get(0)
      .map((seats, row) => seatsForRow(row + 1, seats))
      .flatten()
  },
  {
    name: "Tennispalatsi 2",
    seats: seatsPerRow
      .get(1)
      .map((seats, row) => seatsForRow(row + 1, seats))
      .flatten()
  }
];

const getVenue = i => venues[i];

export default {
  getVenue
};
