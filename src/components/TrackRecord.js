import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import Container from "./common/Container";
import { Header } from "./Header";
import Menu from "./Menu";
import TokenContext from "../contexts/TokenContext";

export default function TrackRecord() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  useEffect(() => {
    if (!token) {
      //   alert("Sessão expirada, por favor faça login novamente");
      navigate("/");
    } else {
      console.log(token);
    }
  }, []);
  return (
    <>
      <Header />
      <Container>esse aqui é o historico viu</Container>
      <Menu />
    </>
  );
}
