import GlobalStyle from "./common/GlobalStyles";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Primeira>oie primeira pag</Primeira>
    </>
  );
}

const Primeira = styled.div`
  font-family: "Playball", cursive;
`;
