import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  input {
    font-family: "Lexend Deca", sans-serif;
    height: 50px;
    text-decoration: none;
    background-color: ${(props) => (props.isDisable ? "#f2f2f2" : "#ffffff")};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #afafaf;
    padding-left: 11px;
    outline: none;
  }

  input::placeholder {
    color: rgb(205, 205, 205, 0.8);
  }
`;

export default FormStyle;
