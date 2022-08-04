import styled from "styled-components";

export default function Teste() {
  return (
    <Fragmento>
      <div>Hábitos</div>
      <div>Histórico</div>
    </Fragmento>
  );
}

const Fragmento = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  height: 70px;
  width: 100%;
  padding: 0 20px;

  div {
    height: 70px;
    display: flex;
    align-items: center;
  }
`;
