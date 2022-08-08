import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UserContext from "../contexts/UserContext";

export default function Menu() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  let percentage;

  let counter = 0;
  function setcounter() {
    if (user.currentHabits) {
      user.currentHabits.map((object) => {
        if (object.done) {
          counter++;
        }
      });
    }
  }

  if (!user.currentHabits || user.currentHabits.length === 0) {
    percentage = 0;
  } else {
    setcounter();
    percentage = Math.floor((counter / user.currentHabits.length) * 100);
  }

  return (
    <Fragmento>
      <Link to="/habitos">Hábitos</Link>
      <div onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          value={percentage}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </div>

      <Link to="/historico">Histórico</Link>
    </Fragmento>
  );
}

const Fragmento = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  height: 10vh;
  width: 100%;
  padding: 0 20px;

  * {
    font-family: "Lexend Deca", sans-serif;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }

  div {
    height: 111px;
    width: 91px;
    margin-bottom: 20px;
  }
`;
