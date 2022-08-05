import styled from "styled-components";

const FormStyle = styled.form`
  * {
    font-family: "Lexend Deca", sans-serif;
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;
  width: 80%;

  ${(props) => {
    if (props.size === "small") {
      return "width: 100%; ";
    }
  }}

  input {
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

    ${(props) => {
      if (props.size === "small") {
        return "height: 40px; width: 90%; margin: 0 auto; margin-top: 18px;";
      }
    }}
  }

  input::placeholder {
    color: rgb(205, 205, 205, 0.8);
  }
`;

export default FormStyle;
