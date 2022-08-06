import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Wrapper>
        TrackIt
        <Imagem>
          <img src={user.image} />
        </Imagem>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  width: 100%;
  font-family: "Playball", cursive;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #ffffff;
`;

const Imagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
