import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import Navigation from './components/Navigation';
import DetailPage from './pages/DetailPage';
import LeaderBoards from './pages/LeaderBoards';
import { asyncUnsetAuthUser } from './states/authUser/action';
import AddThreadPage from './pages/AddThreadPage';

function App() {
  const dispatch = useDispatch();

  const { authUser: { userAuth = null }, isPreload = false } = useSelector(
    (states) => states,
  );

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (userAuth === null) {
    const authUser = {
      avatar: '',
      email: '',
      id: '',
      name: '',
    };
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
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/leaderboards" element={<LeaderBoards />} />
              <Route path="/threads/:id" element={<DetailPage />} />
              <Route path="/thread/add" element={<AddThreadPage />} />
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
        <Navigation authUser={userAuth} signOut={onSignOut} />
      </header>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/leaderboards" element={<LeaderBoards />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/thread/add" element={<AddThreadPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
