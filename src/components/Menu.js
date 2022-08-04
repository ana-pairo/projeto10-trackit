import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Menu() {
  const navigate = useNavigate();
  const percentage = 50;

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
  font-family: "Lexend Deca", sans-serif;
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
    font-family: "Lexend Deca", sans-serif;
  }
`;
