import GlobalStyle from "./common/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import ReloadContext from "../contexts/ReloadContext";
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
    userHabits: "",
    currentHabits: "",
  });
  const [totalReload, setTotalReload] = useState(false);

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
                <TokenContext.Provider value={{ token, totalReload }}>
                  <ReloadContext.Provider
                    value={{ totalReload, setTotalReload }}
                  >
                    <Habits />
                  </ReloadContext.Provider>
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
                  <ReloadContext.Provider
                    value={{ totalReload, setTotalReload }}
                  >
                    <Today />
                  </ReloadContext.Provider>
                </TokenContext.Provider>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
