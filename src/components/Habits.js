import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import ReloadContext from "../contexts/ReloadContext";
import Button from "./common/Button";
import Container from "./common/Container";
import HabitForm from "./HabitForm";
import { Header } from "./Header";
import Menu from "./Menu";
import HabitsList from "./HabitsList";
import { getCurrentHabit, getHabit } from "../services/TrackIt";

export default function Habits() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);
  const { totalReload } = useContext(ReloadContext);
  const [openHabitForm, setOpenHabitForm] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      getHabit(token)
        .then((res1) => {
          getCurrentHabit({ token })
            .then((res2) => {
              setUser({
                ...user,
                userHabits: res1.data,
                currentHabits: res2.data,
              });
            })
            .catch((err2) => {
              navigate("/");
            });
        })
        .catch((err1) => {
          navigate("/");
        });
    }
  }, [totalReload]);

  return (
    <>
      <Header />
      <Container>
        <Title>
          Meus Hábitos
          <Button
            type="add"
            onClick={() => {
              setOpenHabitForm(true);
            }}
          >
            +
          </Button>
        </Title>
        <HabitForm open={openHabitForm} setOpenHabitForm={setOpenHabitForm} />
        {user.userHabits ? (
          user.userHabits.length === 0 ? (
            <Message>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </Message>
          ) : (
            <HabitsList />
          )
        ) : (
          ""
        )}
      </Container>
      <Menu />
    </>
  );
}

const Title = styled.div`
  display: flex;
  height: 40px;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  width: 100%;
  color: #126ba5;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  padding: 0 18px;
`;

const Message = styled(Title)`
  height: 74px;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
`;
