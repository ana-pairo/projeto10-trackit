import GlobalStyle from "./common/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import TrackRecord from "./TrackRecord";
import Habits from "./Habits";
import Today from "./Today";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    id: "",
    name: "",
    image: "",
  });

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <TokenContext.Provider value={{ setToken }}>
                  <Login />
                </TokenContext.Provider>
              }
            />
            <Route path="/cadastro" element={<Register />} />
            <Route
              path="/habitos"
              element={
                <TokenContext.Provider value={{ token }}>
                  <Habits />
                </TokenContext.Provider>
              }
            />
            <Route
              path="/historico"
              element={
                <TokenContext.Provider value={{ token }}>
                  <TrackRecord />
                </TokenContext.Provider>
              }
            />
            <Route
              path="/hoje"
              element={
                <TokenContext.Provider value={{ token }}>
                  <Today />
                </TokenContext.Provider>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
