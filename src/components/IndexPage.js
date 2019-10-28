import React from "react";
import Centerer from "./Centerer";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input";
import {
  SET_REWARD,
  REMOVE_REWARD,
  ADD_REWARD,
  SAVE_REWARDS
} from "../ducks/arpo";
import Button from "./Button";
import { Link } from "react-router-dom";

const IndexPage = props => {
  const dispatch = useDispatch();
  const rewards = useSelector(state => state.arpo.get("rewards"));
  const venues = useSelector(state => state.arpo.get("venues"));

  return (
    <Centerer>
      <h1>Arporaattori</h1>

      <h2>Palkinnot</h2>

      <div>
        {rewards.map((a, k) => {
          return (
            <div key={k}>
              <Input
                type="text"
                value={a}
                onChange={e => {
                  dispatch({
                    type: SET_REWARD,
                    payload: { key: k, value: e.currentTarget.value }
                  });
                }}
              />
              {k === rewards.count() - 1 && k > 0 && (
                <Button
                  onClick={() => {
                    dispatch({
                      type: REMOVE_REWARD
                    });
                  }}
                >
                  -
                </Button>
              )}
              {k === rewards.count() - 1 && (
                <Button
                  onClick={() => {
                    dispatch({
                      type: ADD_REWARD
                    });
                  }}
                >
                  +
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <Button
        onClick={() => {
          dispatch({
            type: SAVE_REWARDS,
            payload: rewards
          });
        }}
      >
        Tallenna
      </Button>

      <h2>Salit</h2>

      <div>
        <ul>
          {venues.map((venue, i) => {
            return (
              <li key={i}>
                <h3>
                  <Link to={`/venue/${i}`}>{venue.name}</Link>
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </Centerer>
  );
};

export default IndexPage;
