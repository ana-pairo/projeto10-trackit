import GlobalStyle from "./common/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    id: "",
    name: "",
    image:
      "https://cdn-diejg.nitrocdn.com/WYiLGoqVkdsKZowLonTJzhjMhQDIKaHE/assets/static/optimized/rev-7a26935/wp-content/uploads/2019/02/cachorro-fofo.png",
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
                  <Home />
                </TokenContext.Provider>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
