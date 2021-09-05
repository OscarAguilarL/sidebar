import React from 'react';
import './NavigationItem.css';

export const NavigationItem = ({ icon, title, selected }) => {
  return (
    <div className={`navigationItem ${selected && 'is-selected'}`}>
      <button className="navigationItem-button">
        <i className={`icon-${icon}`} aria-hidden="true"></i>
      </button>
      <p className={`navigationItem-title ${selected && 'is-selected'}`}>{title}</p>
    </div>
  );
};
