import React from 'react';

const Navbar = () => {
  return (
  <div className="navbar">
    <ul className="nav-links">
      <li><a href="/">My exchange</a></li>
      <li><a href="/what-happened">What happened</a></li>
      <li><a href="/saavutettavuusseloste">Saavutettavuus&shy;seloste</a></li>
    </ul>
  </div>
  );
};

export default Navbar;