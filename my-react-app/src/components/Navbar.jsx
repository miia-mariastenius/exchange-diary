import React from 'react';

const Navbar = () => {
  return (
  <div className="navbar">
    <ul className="nav-links">
      <li className="main-page"><a href="/">My exchange</a></li>
      <li><a href="/">What happened</a></li>
      <li><a href="/accessibility-statement">Accessibility statement</a></li>
    </ul>
  </div>
  );
};

export default Navbar;