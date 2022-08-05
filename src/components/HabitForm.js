import { useState } from "react";

import styled from "styled-components";
import FormStyle from "./common/FormStyle";

export default function HabitForm() {
  const [isDisable, setIsDisable] = useState(false);
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [selectedDays, setSelectedDays] = useState([]);

  console.log(selectedDays);

  function handleDays(e) {
    let idIndex;
    let newSelected = [...selectedDays];
    let id = e.target.name;

    if (!selectedDays.includes(id)) {
      newSelected.push(id);
    } else {
      idIndex = newSelected.indexOf(id);
      newSelected.splice(idIndex, 1);
    }
    setSelectedDays(newSelected);

    // if (selectedDays.includes(id)) {
    //   let idIndex = newSelected.indexOf(id);
    //   newSelected.splice(idIndex, 1);
    //   setSelectedDays = [...newSelected];
    //   console.log(selectedDays);
    // } else {
    //   newSelected.push(id);
    //   setSelectedDays = [...newSelected];
    //   console.log(selectedDays);
    // }
  }

  return (
    <WrapperForm>
      <FormStyle isDisable={isDisable} size="small">
        <input required type="name" placeholder="nome do hábito" name="email" />
      </FormStyle>
      <div>
        {days.map((day, index) => {
          if (selectedDays.includes(index)) {
            return (
              <button
                style={{ backgroundColor: "red" }}
                key={index}
                type="button"
                name={index}
                onClick={handleDays}
              >
                {day}
              </button>
            );
          } else {
            return (
              <button
                key={index}
                type="button"
                name={index}
                onClick={handleDays}
              >
                {day}
              </button>
            );
          }
        })}
      </div>
    </WrapperForm>
  );
}

const WrapperForm = styled.div`
  width: 90%;
  height: 180px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 5px;

  div {
    width: 90%;
    height: 30px;
    margin: 8px auto;
    display: flex;
  }

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
  }
`;
