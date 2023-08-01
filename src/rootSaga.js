import { all } from "redux-saga/effects";
import watchStudentSaga from "./studentSaga";

export default function* rootSaga() {
    yield all([
        watchStudentSaga
    ])
}