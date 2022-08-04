import { useContext } from "react";
import styled from "styled-components";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { Header } from "./Header";
import Teste from "./Teste";

export default function Home() {
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  console.log(token);
  console.log(user);
  return (
    <>
      <Header />
      <Container>oi</Container>
      <Teste />
    </>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;
  height: 90vh;
  padding-top: 70px;
`;
