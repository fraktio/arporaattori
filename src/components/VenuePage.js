import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Arporizer from "./Arporizer";
import Arporized from "./Arporized";
import { RANDOMIZE_START, SET_VENUE, AWARD_REWARD } from "../ducks/arpo";

const VenuePage = props => {
  const venueId = props.match.params.id;

  const dispatch = useDispatch();
  const rewards = useSelector(state => state.arpo.get("rewards"));

  const chosenSeats = useSelector(state => state.arpo.get("chosenSeats"));

  const venue = useSelector(state => state.arpo.getIn(["venues", venueId]));
  const currentReward = useSelector(state => state.arpo.get("currentReward"));

  const randomizeIndex = useSelector(state => state.arpo.get("randomizeIndex"));
  const randomizing = useSelector(state => state.arpo.get("randomizing"));
  const rewarded = useSelector(state => state.arpo.get("rewarded"));

  const randomize = useCallback(() => {
    dispatch({
      type: RANDOMIZE_START
    });
  }, [dispatch]);

  const awardReward = useCallback(() => {
    dispatch({
      type: AWARD_REWARD
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: SET_VENUE,
      payload: venueId
    });
  }, [venueId, dispatch]);

  return (
    <div>
      <Arporizer
        awardReward={awardReward}
        randomize={randomize}
        randomizeIndex={randomizeIndex}
        venue={venue}
        chosenSeats={chosenSeats}
        rewards={rewards}
        currentReward={currentReward}
        randomizing={randomizing}
      />
      <Arporized rewarded={rewarded} />
    </div>
  );
};

export default VenuePage;
