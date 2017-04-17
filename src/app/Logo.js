import React from 'react';

import './Logo.css';


export const Logo = () => (
  <svg className="nav__logo" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
  </svg>
);