import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { deleteHabit } from "../services/TrackIt";

export default function HabitsList({ setReload, reload }) {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  console.log(user);

  function toDelete(habitId) {
    console.log(habitId);

    deleteHabit({ token, habitId })
      .then((res) => {
        console.log(res);
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <HabitsWrapper>
      {user.userHabits.map((habit) => (
        <Habit key={habit.id}>
          <Title>{habit.name}</Title>
          <ion-icon
            name="trash-outline"
            onClick={() => toDelete(habit.id)}
          ></ion-icon>
          <Days>
            {weekDays.map((day, index) => {
              if (habit.days.includes(index)) {
                return (
                  <Day selected={true} key={index}>
                    {day}
                  </Day>
                );
              } else {
                return (
                  <Day selected={false} key={index}>
                    {day}
                  </Day>
                );
              }
            })}
          </Days>
        </Habit>
      ))}
    </HabitsWrapper>
  );
}

const HabitsWrapper = styled.div`
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
    width: 17px;
    height: 17px;
    color: #666666;
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
`;

const Days = styled.div`
  width: 90%;
  height: 30px;
  margin: 8px auto;
  display: flex;
  flex-direction: row;
`;

const Day = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 4px;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => (props.selected ? "#ffffff" : "rgb(205, 205, 205, 0.8)")};
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
`;
