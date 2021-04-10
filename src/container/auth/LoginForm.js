import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  //인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };
  //컴포넌트가 처음 랜더링 될때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);
  // 로그인 성공/ 실패 처리

  useEffect(() => {
    if (authError) {
      //'오류 발생'
      setError('로그인 실패');
      return;
    }
    if (auth) {
      //'회원가입 성공'
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  // user 값이 잘 설정되어 있는지 확인

  useEffect(() => {
    if (user) {
      //'check API 성공
      history.push('/');
      //로그인 상태 유지하기
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
