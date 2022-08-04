import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function postRegistration(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function postHabit() {
  const promise = axios.post(`${BASE_URL}/habits`);
  return promise;
}

function getHabit(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function deleteHabit({ token, habitId }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config);
  return promise;
}

function getCurrentHabit(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function checkHabit({ token, habitId }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, "", config);
  return promise;
}

function uncheckHabit({ token, habitId }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.post(
    `${BASE_URL}/habits/${habitId}/uncheck`,
    "",
    config
  );
  return promise;
}

function getHabitHistory(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get(`${BASE_URL}/habits/history/daily`, config);
  return promise;
}

export {
  postLogin,
  postRegistration,
  postHabit,
  getHabit,
  deleteHabit,
  getCurrentHabit,
  checkHabit,
  uncheckHabit,
  getHabitHistory,
};
