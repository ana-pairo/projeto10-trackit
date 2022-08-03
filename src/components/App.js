import GlobalStyle from "./common/GlobalStyles";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div>oie primeira pag</div>
      <Primeira>oie primeira</Primeira>
    </>
  );
}

const Primeira = styled.div`
  font-family: "Playball", cursive;
`;
