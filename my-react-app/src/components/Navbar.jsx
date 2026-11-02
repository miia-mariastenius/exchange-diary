import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Navbar = ({ buttonText, content }) => {

  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((open) => !open);
  }

  return (
    <div className="navbar">
      <ul className="nav-links">
        <li className="main-page"><a href="/">My exchange</a></li>
        <li><DropdownButton toggle={toggleDropdown} open={open}>
          {buttonText}
        </DropdownButton>
          <DropdownContent open={open}>
            {content}
          </DropdownContent></li>
        <li><a href="/accessibility-statement">Accessibility statement</a></li>
      </ul>
    </div>
  );
};

const DropdownButton = ({ children, open, toggle }) => {
  return (
    <div
      onClick={toggle}
      className={`dropdown-button`}>
      {children}
      <span>
        {open ? <FaAngleUp className="dropdown-icon" aria-hidden="true" /> : <FaAngleDown className="dropdown-icon" aria-hidden="true" />}
      </span>
    </div>
  )
}

const DropdownContent = ({ children, open }) => {
  return (
    <div className={`dropdown-content ${open ? "dropdown-content-open" : null}`}>{children}</div>
  )
}

// const DropdownItem = ({ children, onClick }) => {
//   return (
//     <div className="dropdown-item" onClick={onClick}>
//       {children}
//     </div>
//   )
// }

export default Navbar;