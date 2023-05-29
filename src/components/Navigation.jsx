import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMessage,
  AiOutlineBarChart,
  AiOutlineLogin,
} from 'react-icons/ai';
import { string, func,shape } from 'prop-types';

function Navigation({authUser,signOut}) {
  return (
    <div className="navigation">
      <h1>
        <Link to="/">Home</Link>
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
          {authUser.id === '' ? <Link to="/login">Login</Link> : <button style={{backgroundColor:"transparent",border:'none'}} onClick={signOut}>Logout</button>}
        </div>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  authUser: shape({
    avatar:string,
    email:string,
    id:string,
    name:string
  }),
  signOut:func.isRequired
};

export default Navigation;
