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

const SCAPE = true;
const SCAPE_MAX_SEATS_PER_ROW = 42;
const SCAPE_BLOCK_SIZE = 13;
const seatsForRow = (row, seats) => {
  return Range(1, seats + 1).map(seatNumber => {
    // Handle missing seats
    let offset = 0;
    let weirdRow = false;
    if (SCAPE && row == 18) {
      weirdRow = true;
      if (seatNumber >= 6) {
        offset = SCAPE_BLOCK_SIZE;
      }
    } else if (SCAPE && row == 19) {
      weirdRow = true;
      if (seatNumber >= 5) {
        offset = SCAPE_BLOCK_SIZE;
      }
    } else {
      offset = 0;
    }
    return {
      row: row,
      seat: seatNumber,
      position: weirdRow
        ? Math.floor((SCAPE_MAX_SEATS_PER_ROW - seats - SCAPE_BLOCK_SIZE) / 2) +
          seatNumber +
          offset
        : Math.floor((SCAPE_MAX_SEATS_PER_ROW - seats) / 2) + seatNumber
    };
  });
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
