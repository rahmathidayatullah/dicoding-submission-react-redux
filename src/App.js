import React, { useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
// import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
// import DetailPage from './pages/DetailPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import Navigation from './components/Navigation';
import DetailPage from './pages/DetailPage';
import LeaderBoards from './pages/LeaderBoards';
import { asyncUnsetAuthUser } from './states/authUser/action';
// import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  useEffect(() => {
    if (authUser !== null) {
      // navigate('/')
    }
  }, [authUser]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    const userAuth = {
      avatar: '',
      email: '',
      id: '',
      name: '',
    };
    return (
      <>
        <Loading />
        <header>
          <Navigation authUser={userAuth} signOut={onSignOut} />
        </header>
        <div className="app-container">
          <main>
            <Routes>
              <Route path="/*" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/leaderboards" element={<LeaderBoards />} />
              <Route path="/threads/:id" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <header>
        <Navigation authUser={authUser} signOut={onSignOut} />
      </header>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/leaderboards" element={<LeaderBoards />} />
            <Route path="/threads/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
