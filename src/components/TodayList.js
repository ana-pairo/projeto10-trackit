import styled from "styled-components";
import { useContext, useEffect } from "react";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";

export default function TodayList() {
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <TodayWrapper>
      {user.currentHabits.map((currentHabit, index) => (
        <Habit key={index}>
          <Title>{currentHabit.name}</Title>
          <ion-icon name="checkbox"></ion-icon>
          <Sequence>
            Sequência atual: <span> {currentHabit.currentSequence} dias</span>
          </Sequence>
          <Sequence>
            Seu recorde: <span>{currentHabit.highestSequence} dias</span>
          </Sequence>
        </Habit>
      ))}
    </TodayWrapper>
  );
}

const TodayWrapper = styled.div`
  margin-top: 22px;
  width: 100%;
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
    color: #ebebeb;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;

  margin: 0 auto;
  width: 90%;
  margin-bottom: 7px;
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
