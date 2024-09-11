import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { actions } from "./driveSlice";
import { drives } from "./driveSlice";

function* fetchDrives() {
  try {
    yield put(actions.fetchDrivesSuccess(drives));
  } catch (error) {
    yield put(actions.fetchDrivesFailure(error.message));
  }
}

function* addDrive(action) {
  const newDrive = action.payload;
  try {
    yield put(actions.addDrivesSuccess(newDrive));
  } catch (error) {
    yield put(actions.addDrivesFailure());
  }
}

export function* watchFetch() {
  yield takeLatest(actions.fetchDrivesRequest.type, fetchDrives);
}

export function* watchAdd() {
  yield takeEvery(actions.addDrivesRequest.type, addDrive);
}
