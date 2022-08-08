import { useState, useContext } from "react";
import styled from "styled-components";

import Button from "./common/Button";
import TokenContext from "../contexts/TokenContext";
import { postHabit } from "../services/TrackIt";
import ReloadContext from "../contexts/ReloadContext";

export default function HabitForm({ open, setOpenHabitForm }) {
  const [isDisable, setIsDisable] = useState(false);
  const [disableDays, setDisableDays] = useState(false);
  const { token } = useContext(TokenContext);
  const { totalReload, setTotalReload } = useContext(ReloadContext);
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [selectedDays, setSelectedDays] = useState([]);
  const [habitName, setHabitName] = useState("");

  function handleDay(id) {
    let indexId;
    let newArray = [...selectedDays];
    if (selectedDays.includes(id)) {
      indexId = newArray.indexOf(id);
      newArray.splice(indexId, 1);
    } else {
      newArray.push(id);
    }
    setSelectedDays(newArray);
  }

  function handleHabit() {
    if (selectedDays.length === 0) {
      return alert("Por favor preencha todos os campos");
    }
    setIsDisable(true);
    setDisableDays(true);
    const body = {
      name: habitName,
      days: [...selectedDays],
    };
    postHabit({ token, body })
      .then((res) => {
        setHabitName("");
        setSelectedDays([]);
        setOpenHabitForm(false);
        setIsDisable(false);
        setDisableDays(false);
        setTotalReload(!totalReload);
      })
      .catch((err) => {
        setIsDisable(false);
        setDisableDays(false);
        alert("Por favor preencha todos os campos");
      });
  }

  return (
    <WrapperForm open={open}>
      <input
        disabled={isDisable}
        required
        type="name"
        placeholder="nome do hábito"
        name="name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <DaysOption>
        {days.map((day, index) => {
          if (selectedDays.includes(index)) {
            return (
              <Button
                key={index}
                disabled={disableDays}
                color="#cfcfcf"
                letter="#ffffff"
                type="days"
                onClick={() => handleDay(index)}
              >
                {day}
              </Button>
            );
          } else {
            return (
              <Button
                key={index}
                disabled={disableDays}
                color="#ffffff"
                letter="#cfcfcf"
                type="days"
                onClick={() => handleDay(index)}
              >
                {day}
              </Button>
            );
          }
        })}
      </DaysOption>
      <Buttons>
        <Button
          disabled={isDisable}
          type="cancel"
          onClick={() => {
            setOpenHabitForm(false);
          }}
        >
          Cancelar
        </Button>
        <Button isDisable={isDisable} type="save" onClick={handleHabit}>
          Salvar
        </Button>
      </Buttons>
    </WrapperForm>
  );
}

const WrapperForm = styled.div`
  display: ${(props) => (props.open ? "initial" : "none")};
  width: 90%;
  min-height: 170px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;

  input {
    height: 45px;
    width: 100%;
    margin: 18px 0 8px 0;
    text-decoration: none;
    background-color: ${(props) => (props.isDisable ? "#f2f2f2" : "#ffffff")};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    padding-left: 11px;
    outline: none;
  }

  input::placeholder {
    color: rgb(205, 205, 205, 0.8);
  }
`;

const DaysOption = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: start;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
`;

/* 
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0;
    padding-bottom: 3px;
    height: 30px;
    width: 30px;
    text-decoration: none;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-right: 4px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: rgb(205, 205, 205, 0.8);
    outline: none;
  } */
