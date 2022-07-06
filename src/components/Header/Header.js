import logo from "../../assets/logo/brainflix-logo.svg";
import avatar from "../../assets/images/mohan-muruge.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <span className="header__logo-link">
        <Link to="/">
          <img className="header__logo" src={logo} alt="brainflix logo" />
        </Link>
      </span>
      <div className="header__middle-container">
        <input className="header__search" placeholder="Search" />
        <img
          className="header__avatar header__avatar--mobile"
          src={avatar}
          alt="Mohan muruge"
        />
      </div>
      <Link to="/upload">
        <Button text="UPLOAD" id="button--upload" />
      </Link>
      <img
        className="header__avatar header__avatar--desktab"
        src={avatar}
        alt="Mohan muruge"
      />
    </header>
  );
};

export default Header;
