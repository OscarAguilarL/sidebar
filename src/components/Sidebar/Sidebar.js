import React, { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { NavigationItem } from '../NavigationItem/NavigationItem';

import 'animate.css';

import './Sidebar.css';

const navItems = [
  { icon: 'archive', title: 'Recibidos', selected: true },
  { icon: 'start', title: 'Destacados', selected: false },
  { icon: 'clock', title: 'Pospuestos', selected: false },
  { icon: 'send', title: 'Enviados', selected: false },
];

const navCategorieItems = [
  { icon: 'mail', title: 'Todos', selected: false },
  { icon: 'trash', title: 'Papelera', selected: false },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`Sidebar ${isOpen && 'is-open'}`}>
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
      {navItems.map((item) => (
        <NavigationItem
          icon={item.icon}
          title={item.title}
          key={item.title}
          selected={item.selected}
        />
      ))}
      <p
        className={`sidebar-header ${
          isOpen && 'is-open'
        } animate__animated animate__fadeIn`}
      >
        Categorias
      </p>
      {navCategorieItems.map((item) => (
        <NavigationItem
          icon={item.icon}
          title={item.title}
          key={item.title}
          selected={item.selected}
        />
      ))}
    </div>
  );
};
