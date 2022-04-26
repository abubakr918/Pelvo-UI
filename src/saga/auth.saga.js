/* eslint-disable require-yield */
import * as types from "../types/auth.type";
import { takeLatest, call, put } from "redux-saga/effects";
import * as Services from "../service/auth.servicve";

function* RegisterRequestSaga(action) {
  console.log("saga is ===>>", action);
  try {
  } catch (error) {}
}

function* CountiresRequestSaga(action) {
  try {
    const response = yield call(Services.callGetCountries, action);
    console.log("saga is ===>>", response);
  } catch (error) {}
}

export default function* authWatcher() {
  yield takeLatest(types.REGISTRATION_REQUEST, RegisterRequestSaga);
  yield takeLatest(types.COUNTRIES_REQUEST, CountiresRequestSaga);
}
