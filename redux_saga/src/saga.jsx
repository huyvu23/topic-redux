import { call, put, all, fork } from "redux-saga/effects";
import {
  getListPostSuccess,
  incrementCounter,
  decrementCounter,
} from "./action";
import { getPostData } from "./postAPI";
import { Types } from "./type";

function* getListPostSaga(action) {
  try {
    const data = yield call(getPostData);
    yield put(getListPostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleIncreaseSaga(action) {
  console.log("action:", action);
  try {
    yield put(incrementCounter(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* handleDecreaseSaga(action) {
  try {
    yield put(decrementCounter(action.payload));
  } catch (error) {
    console.log(error);
  }
}

// chúng ta sử dụng effect `takeLatest` để theo dõi các action có kiểu `Types.getListPost` và gọi generator `getListPostSaga` để xử lý chúng.
function* postsSaga() {
  yield fork(Types.getListPost, getListPostSaga);
}

function* increaseSaga() {
  yield fork(Types.increase, handleIncreaseSaga);
}

function* decreaseSaga() {
  yield fork(Types.decrease, handleDecreaseSaga);
}

export default function* rootSaga() {
  yield all([postsSaga(), increaseSaga(), decreaseSaga()]);
}
