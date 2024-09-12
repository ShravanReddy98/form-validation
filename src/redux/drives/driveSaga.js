import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { actions } from "./driveSlice";

export let drives = [{
  jobId: "1463",
  companyName: "Aatral Technologies India Pvt ltd",
  jobTitle: "Backend Developer",
  jobRole: "Backend Developer",
  jobLocation: "Bengaluru",
  Package: "Upto 6 LPA",
  skills: [
    "data structures and algorithms",
    "C",
    "C++",
    "java",
    "Springboot",
    "Mysql",
  ],
  genderPreference: "Male & Female",
  qualification: "BE/B.Tech",
  yearOfPassing: "2022, 2023",
  stream: "",
  backlogAllowed: false,
  sslcPer: "80",
  diplomaPer: "80",
  graduateMinPer: "80",
  gapInEducation: true,
  noOfPositions: 5,
  interviewRounds: [
    "Screening Round",
    "coding test (online)",
    "Technical round f2f (Hybrid)",
    "Technical round f2f",
  ],
  modeOfInterview: "offline",
  serviceAgreement: true,
  deposit: "",
  relocation: true,
  certificateSubmission: true,
  shifts: "based on project",
  blockingPeriod: "6 months",
  firstRoundDate: "23-09-2024 ",
  expiresIn: "19-09-2024 : 19:15",
  minEmployabilityScore: "50",
  interviewType: "F2F",
  UploadJd: "",
}];

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
    console.log(Array.isArray(drives), typeof newDrive);
    const updatedDrives = [...drives, newDrive];
    drives = updatedDrives;

    yield put(actions.addDrivesSuccess(newDrive));
    yield put(actions.fetchDrivesSuccess(updatedDrives));
  } catch (error) {
    console.log(error);
    yield put(actions.addDrivesFailure());
  }
}

export function* watchFetch() {
  yield takeLatest(actions.fetchDrivesRequest.type, fetchDrives);
}

export function* watchAdd() {
  yield takeEvery(actions.addDrivesRequest.type, addDrive);
}
