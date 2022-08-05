import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import Button from "./common/Button";
import Container from "./common/Container";
import HabitForm from "./HabitForm";
import { Header } from "./Header";
import Menu from "./Menu";

export default function Habits() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      // alert("Sessão expirada, por favor faça login novamente");
      navigate("/");
    } else {
      console.log(token);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>
          Meus Hábitos
          <Button type="add">+</Button>
        </Title>
        <HabitForm />
      </Container>
      <Menu />
    </>
  );
}

const Title = styled.div`
  display: flex;
  height: 40px;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  width: 100%;
  color: #126ba5;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  margin-top: 22px;
  padding: 0 18px;
`;
