import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import Container from "./common/Container";
import { Header } from "./Header";
import Menu from "./Menu";
import TokenContext from "../contexts/TokenContext";

export default function TrackRecord() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
    }
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Title>Histórico</Title>
        <Message>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </Message>
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
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  padding: 0 18px;
`;

const Message = styled(Title)`
  font-size: 18px;
  line-height: 22px;
  color: #666666;
`;
