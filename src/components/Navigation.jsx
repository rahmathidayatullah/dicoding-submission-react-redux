import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMessage,
  AiOutlineBarChart,
  AiOutlineLogin,
} from 'react-icons/ai';
import { string, func, shape } from 'prop-types';

function Navigation({ authUser, signOut }) {
  return (
    <div className="navigation">
      <h1>
        <Link to="/">Home App</Link>
      </h1>
      <div className="navigation-list">
        <div className="navigation-list__item">
          <AiOutlineMessage />
          <Link to="/">Thread</Link>
        </div>
        <div className="navigation-list__item">
          <AiOutlineBarChart />
          <Link to="/leaderboards">Leaderboards</Link>
        </div>
        <div className="navigation-list__item">
          <AiOutlineLogin />
          {authUser.id === '' ? <Link to="/login">Login</Link> : <button type="button" style={{ backgroundColor: 'transparent', border: 'none' }} onClick={signOut}>Logout</button>}
        </div>
      </div>
    </div>
  );
}

const authUserShape = {
  avatar: string,
  email: string,
  id: string,
  name: string,
};

Navigation.propTypes = {
  authUser: shape(authUserShape),
  signOut: func.isRequired,
};

Navigation.defaultProps = {
  authUser: {},
};

export default Navigation;
