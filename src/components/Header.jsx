import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">DataSteward</div>
        <nav className="menu">
          <a href="#" className="menu-item">Reference</a>
          <a href="#" className="menu-item">Learning</a>
          <a href="#" className="menu-item">Blog</a>
        </nav>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
