// 사용자의 상태
import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// 로그아웃
const LOGOUT = 'user/LOGOUT';

// 회원정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK',
);

// 로그아웃
export const logout = createAction(LOGOUT);

// 회원정보 확인

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

// 로그인 정보가 만료되었을때

function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('local storate is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); //첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수. put은 액션을 디스패치, call 함수를 실행 - logout API 호출
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield logoutSaga(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);
