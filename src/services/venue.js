import { List, Range, Map } from "immutable";

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

const weirdSeats = List.of(
  Map({
    "18;1": 10,
    "18;2": 11,
    "18;3": 12,
    "18;4": 13,
    "18;5": 27,
    "18;6": 28,
    "18;7": 29,
    "18;8": 30,
    "18;9": 31,
    "18;10": 32,
    "18;11": 33,
    "19;1": 11,
    "19;2": 12,
    "19;3": 13,
    "19;4": 27,
    "19;5": 28,
    "19;6": 29,
    "19;7": 30,
    "19;8": 31,
    "19;9": 32
  }),
  Map({})
);

console.log(weirdSeats.toJS());

const seatsForRow = (venueId, row, seats) => {
  const maxSeats = maxSeatsPerRow(venueId);

  return Range(1, seats + 1).map(seatNumber => {
    console.log(`${row};${seatNumber}`);
    console.log(weirdSeats.getIn([venueId, `${row};${seatNumber}`]), "tus");

    return {
      row: row,
      seat: seatNumber,
      position: weirdSeats.getIn(
        [venueId, `${row};${seatNumber}`],
        Math.floor((maxSeats - seats) / 2) + seatNumber
      )
    };
  });
};

const maxSeatsPerRow = venueId => seatsPerRow.get(venueId).max();

const venues = [
  {
    name: "Scape",
    seats: seatsPerRow
      .get(0)
      .map((seats, row) => seatsForRow(0, row + 1, seats))
      .flatten()
  },
  {
    name: "Tennispalatsi 2",
    seats: seatsPerRow
      .get(1)
      .map((seats, row) => seatsForRow(1, row + 1, seats))
      .flatten()
  }
];

const getVenue = i => venues[i];

export default {
  getVenue
};
