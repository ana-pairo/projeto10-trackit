import styled from "styled-components";

export default function Container({ children, ...otherProps }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}

const ContainerWrapper = styled.div`
  background-color: #e5e5e5;
  height: 90vh;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    font-family: "Lexend Deca", sans-serif;
    box-sizing: border-box;
  }
`;
