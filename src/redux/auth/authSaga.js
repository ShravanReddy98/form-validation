import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./authSlice";

const users = {
  admin: { name: "admin", password: "admin@123" },
  user: { name: "user", password: "user@123" },
};

function* authLogin(credentials) {
  const { name, password, role } = credentials.payload;
  
  const user = users[role];
  if (name === user.name && password === user.password) {

    yield put(actions.loginSuccess({ user: user, authType: role }));
  } else {
    const error = new Error("Invalid user name or Password");
    yield put(actions.loginFailure(error.message));
  }
}

export default function* watchAuth() {
  yield takeLatest(actions.loginRequest.type, authLogin);
}
