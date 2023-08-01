import { takeLatest, call, put } from "redux-saga/effects";
import { createStudentBegin } from "./appSlice";


function* createStudentSaga(payload) {
    yield console.log("create student saga", payload);
}

export default function* watchStudentSaga() {
    yield takeLatest(createStudentBegin.type, createStudentSaga);
}