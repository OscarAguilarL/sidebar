import React from 'react';
import { Menu } from '../Menu/Menu';

import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="Sidebar is-open">
      <Menu />
    </div>
  );
};
