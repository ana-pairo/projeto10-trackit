import styled from "styled-components";

export default function Button({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.button`
  background-color: pink;
`;
