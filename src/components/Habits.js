import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import Container from "./common/Container";
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
      <Container>oi eu aqui</Container>
      <Menu />
    </>
  );
}
