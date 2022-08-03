import { useContext } from "react";
import logo from "../assets/img/Logo.png";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import FormStyle from "./common/FormStyle";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);

  return (
    <>
      <Wrapper>
        <img src={logo} />
        <form>
          <input type="email" />
          <input type="password" />
          <button type="submit" />
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: pink;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 10vh;
    background-color: aquamarine;
    width: 50%;
    height: auto;
  }
`;
