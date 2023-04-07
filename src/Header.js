import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <nav className="header">
      {/* logo on the left => img */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      {/* Search Box */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Hello Qazi</span>
            <span>Sign In</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        
      </div>
    </nav>
  );
};

export default Header;
