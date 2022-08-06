import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";

import FormStyle from "./common/FormStyle";
import Button from "./common/Button";
import StyledLink from "./common/StyledLink";
import logo from "../assets/img/Logo.png";
import { postRegistration } from "../services/TrackIt";

export default function Register() {
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function handleForm(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function sendRegister(e) {
    e.preventDefault();
    setIsDisable(true);

    postRegistration(inputData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          alert(
            "Email já cadastrado, por favor, utilize outro email ou faça login"
          );
          setIsDisable(false);
        }
        if (err.response.status === 422) {
          alert("Dados inválidos, por favor, tente novamente");
          setIsDisable(false);
        }
      });
  }

  return (
    <>
      <Wrapper>
        <img src={logo} />
        <FormStyle isDisable={isDisable} onSubmit={sendRegister}>
          <input
            required
            type="email"
            placeholder="email"
            name="email"
            disabled={isDisable}
            onChange={handleForm}
            value={inputData.email}
          />
          <input
            required
            type="password"
            placeholder="senha"
            name="password"
            disabled={isDisable}
            onChange={handleForm}
            value={inputData.password}
          />
          <input
            required
            type="text"
            placeholder="nome"
            name="name"
            disabled={isDisable}
            onChange={handleForm}
            value={inputData.name}
          />
          <input
            required
            type="url"
            placeholder="imagem"
            name="image"
            disabled={isDisable}
            onChange={handleForm}
            value={inputData.image}
          />
          <Button type="submit" isDisable={isDisable}>
            Cadastrar
          </Button>
        </FormStyle>
        <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
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
