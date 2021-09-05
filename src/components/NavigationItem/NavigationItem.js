import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

export const NavigationItem = ({ icon, title, selected }) => {
  let slug = title.toLowerCase();
  // if(title === 'Recibidos') {
  //   slug = '';
  // }

  return (
    <NavLink
      className="navigationItem"
      to={`/${slug}`}
      activeClassName="is-selected"
    >
      <button className="navigationItem-button">
        <i className={`icon-${icon}`} aria-hidden="true"></i>
      </button>
      <p className="navigationItem-title">{title}</p>
    </NavLink>
  );
};
