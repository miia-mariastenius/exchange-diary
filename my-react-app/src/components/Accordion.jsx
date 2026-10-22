import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const Accordion = () => {
  const accordionData = {
    title: "Title",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem."
  }

  const { title, content } = accordionData;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex="0"
        className="accordion-header">
        <h2 className="accordion-title">{title}</h2>
        <div className="accordion-icon">{isOpen ? <FaAngleDown aria-hidden="true" /> : <FaAngleUp aria-hidden="true" />}</div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion;