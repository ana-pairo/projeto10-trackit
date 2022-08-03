import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Button({
  children,
  width,
  height,
  isDisable,
  ...otherProps
}) {
  return (
    <ButtonWrapper
      isDisable={isDisable}
      width={width}
      height={height}
      {...otherProps}
    >
      {isDisable ? (
        <ThreeDots
          height="20"
          width="80"
          radius="9"
          color="white"
          ariaLabel="three-dots-loading"
        />
      ) : (
        children
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  width: 100%;
  text-decoration: none;
  border: none;
  height: 45px;
  background-color: ${(props) => (props.isDisable ? "#52B6FF" : "#52b6ff")};
  opacity: ${(props) => (props.isDisable ? 0.7 : 1)};
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
