import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import Git from './pages/Git';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Upload from './pages/Upload';
import WritePage from './pages/WritePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);
  return (
    <>
      <Helmet>
        <title>Daliy Lab's</title>
      </Helmet>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path={['/@:username', '/']} exact component={PostListPage} />
          </>
        ) : (
          <>
            <Route component={LoginPage} path="/" />
          </>
        )}
      </Switch>
      {/* username을 파라미터로 읽을 수 있음 */}
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={Upload} path="/upload" />
      <Route component={Git} path="/git" />
    </>
  );
};

export default App;
