import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// 요청을 위한 액션 타입을 payload 로 설정합니다.

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType, //payload를 정의 하는 함
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType, //payload를 정의 하는 함
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
