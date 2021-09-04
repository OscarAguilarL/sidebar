import React, { useState } from 'react';
import { Menu } from '../Menu/Menu';

import './Sidebar.css';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`Sidebar ${isOpen && 'is-open'}`}>
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};
