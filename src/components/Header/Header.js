import logo from "../../assets/logo/brainflix-logo.svg";
import image from "../../assets/images/mohan-muruge.jpg";
import Button from "../Button/Button";
import uploadIcon from "../../assets/icons/upload.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="brainflix logo" />
      </a>
      <div className="header__middle-container">
        <input className="header__search" placeholder="Search" />
        <img
          className="header__image header__image--mobile"
          src={image}
          alt="Mohan muruge"
        />
      </div>
      <Button text="UPLOAD" icon={uploadIcon} alt="Upload icon" />
      <img
        className="header__image header__image--desktab"
        src={image}
        alt="Mohan muruge"
      />
    </header>
  );
};

export default Header;
