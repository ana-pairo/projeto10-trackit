import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { checkHabit, uncheckHabit } from "../services/TrackIt";
import ReloadContext from "../contexts/ReloadContext";

export default function TodayList({ reloadHabits, setReloadHabits }) {
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const { totalReload, setTotalReload } = useContext(ReloadContext);

  function handleCheck(done, habitId) {
    if (done) {
      uncheckHabit({ token, habitId })
        .then((res) => {
          setTotalReload(!totalReload);
        })
        .catch((err) => console.log(err));
    } else {
      checkHabit({ token, habitId })
        .then((res) => {
          setTotalReload(!totalReload);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <TodayWrapper>
      {user.currentHabits.map((currentHabit, index) => (
        <Habit key={index}>
          <Title>{currentHabit.name}</Title>
          <ion-icon
            name="checkbox"
            style={{ color: currentHabit.done ? "#8FC549" : "#ebebeb" }}
            onClick={() => handleCheck(currentHabit.done, currentHabit.id)}
          ></ion-icon>
          <Sequence>
            Sequência atual:
            <StyledNumber done={currentHabit.done}>
              {currentHabit.currentSequence} dias
            </StyledNumber>
          </Sequence>
          <Sequence>
            Seu recorde:
            <StyledNumber
              done={
                currentHabit.done &&
                currentHabit.currentSequence === currentHabit.highestSequence
                  ? true
                  : false
              }
            >
              {currentHabit.highestSequence} dias
            </StyledNumber>
          </Sequence>
        </Habit>
      ))}
    </TodayWrapper>
  );
}

const TodayWrapper = styled.div`
  margin-top: 22px;
  width: 100%;
  margin-bottom: 30px;
`;

const Habit = styled.div`
  width: 90%;
  min-height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto 10px auto;
  padding: 13px 0;
  position: relative;
  resize: vertical;

  ion-icon {
    display: flex;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 70px;
    height: 70px;
    visibility: visible;
  }
`;

const Title = styled.div`
  resize: vertical;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;
  margin: 0 auto;
  width: 90%;
  margin-bottom: 7px;
  padding-right: 70px;
`;

const Sequence = styled.div`
  height: 15px;
  line-height: 16px;
  color: #666666;
  display: flex;
  width: 200px;
  margin-left: 5%;
  font-size: 12px;
`;

const StyledNumber = styled.div`
  margin-left: 5px;
  color: ${(props) => (props.done ? "#8FC549" : "#666666")};
`;
