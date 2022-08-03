import { useContext, useState } from "react";
import logo from "../assets/img/Logo.png";
import styled from "styled-components";
// import { useNavigate } from "react-router";

import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import FormStyle from "./common/FormStyle";
import Button from "./common/Button";
import StyledLink from "./common/StyledLink";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  // const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);

  function handleLogin(e) {
    e.preventDefault();
    setIsDisable(true);

    // useEffect(() => {
    //   getMovies().then((res) => setMovies(res.data));
    // }, []);
  }

  return (
    <>
      <Wrapper>
        <img src={logo} />
        <FormStyle onSubmit={handleLogin} isDisable={isDisable}>
          <input
            required
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisable}
          />
          <input
            required
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isDisable}
          />
          <Button type="submit" isDisable={isDisable}>
            Entrar
          </Button>
        </FormStyle>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 10vh 0;
    width: 50%;
    height: auto;
  }
`;
