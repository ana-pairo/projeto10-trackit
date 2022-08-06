import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import Container from "./common/Container";
import { Header } from "./Header";
import Menu from "./Menu";
import TokenContext from "../contexts/TokenContext";
import styled from "styled-components";
import TodayList from "./TodayList";
import UserContext from "../contexts/UserContext";

import { getCurrentHabit } from "../services/TrackIt";

export default function Today() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  let weekDay = dayjs().day();
  let dataDay = dayjs().format("DD/MM");

  const weekDays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      getCurrentHabit({ token })
        .then((res) => {
          setUser({
            ...user,
            currentHabits: res.data,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Title>
          {weekDays[weekDay]}, {dataDay}
        </Title>

        {user.currentHabits ? (
          user.currentHabits.length === 0 ? (
            <Message>Você não tem nenhum hábito marcado para hoje!</Message>
          ) : (
            <>
              <Message>Nenhum hábito concluído ainda</Message>
              <TodayList />
            </>
          )
        ) : (
          ""
        )}
      </Container>
      <Menu />
    </>
  );
}

const Title = styled.div`
  display: flex;
  height: 40px;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  width: 100%;
  color: #126ba5;
  align-items: center;
  margin-top: 22px;
  padding: 0 18px;
`;

const Message = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #bababa;
  display: flex;
  width: 100%;

  padding: 0 18px;
  justify-content: start;
`;
