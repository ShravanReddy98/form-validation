import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./auth/authSlice"
import driveReducer from "./drives/driveSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware=createSagaMiddleware()

const store=configureStore({
    reducer:{
        user:userReducer,
        drives:driveReducer
    },
    middleware:(getSagaMiddleware)=>getSagaMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store;