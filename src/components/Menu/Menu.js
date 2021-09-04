import React from 'react';
import './Menu.css';
import logo from '../../assets/img/logo.png';
import menu from '../../assets/img/menu.svg';

export const Menu = ({ setIsOpen, isOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`Menu ${isOpen && 'is-open'}`}>
      <button className="menu-hamburguer" onClick={handleClick}>
        <img src={menu} alt="" />
      </button>

      <div className="menu-logo">
        <img src={logo} alt="" width="32" height="32" />
        <h2 className="title">No te rindas</h2>
      </div>
    </div>
  );
};
