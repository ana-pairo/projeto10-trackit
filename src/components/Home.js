import { useContext } from "react";
import TokenContext from "../contexts/TokenContext";

export default function Home() {
  const { token } = useContext(TokenContext);
  console.log(token);
  return (
    <>
      <div>home</div>
    </>
  );
}
