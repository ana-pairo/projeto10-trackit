import { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import logo from "../assets/img/Logo.png";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import FormStyle from "./common/FormStyle";
import Button from "./common/Button";
import StyledLink from "./common/StyledLink";
import { postLogin } from "../services/TrackIt";

export default function Login() {
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const { setUser, user } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);

  function handleLogin(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function sendLogin(e) {
    e.preventDefault();
    setIsDisable(true);

    postLogin(inputData)
      .then((res) => {
        setUser({
          ...user,
          id: res.data.id,
          name: res.data.name,
          image: res.data.image,
        });
        setToken(res.data.token);
        navigate("/habitos");
      })
      .catch((err) => {
        console.log(err);
        alert("Email ou senha inválidos, tente novamente ou cadastre-se");
        setIsDisable(false);
      });
  }

  return (
    <>
      <Wrapper>
        <img src={logo} />
        <FormStyle isDisable={isDisable} onSubmit={sendLogin}>
          <input
            required
            type="email"
            placeholder="email"
            name="email"
            disabled={isDisable}
            onChange={handleLogin}
            value={inputData.email}
          />
          <input
            required
            type="password"
            placeholder="senha"
            name="password"
            disabled={isDisable}
            onChange={handleLogin}
            value={inputData.password}
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
    margin: 10vh 0 5vh 0;
    width: 50%;
    height: auto;
  }
`;
