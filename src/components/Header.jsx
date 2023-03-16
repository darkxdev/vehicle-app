import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ title }) => (
  <div className="header-bar">
    <div className="header-year">
      <NavLink to="/">
        <i className="fa-solid fa-chevron-left" />
      </NavLink>
      <p>2023</p>
    </div>
    <p>{title}</p>
    <div className="header-settings">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
