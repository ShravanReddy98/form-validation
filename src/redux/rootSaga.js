import { all } from "redux-saga/effects";
import watchAuth from "./auth/authSaga";
import { watchAdd, watchFetch } from "./drives/driveSaga";


export default function* rootSaga(){
    yield all([
        watchAuth(),
        watchFetch(),
        watchAdd()
    ])
}