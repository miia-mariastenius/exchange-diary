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
      <h2 className="accordion-h2">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="accordion-content"
          id="accordion"
          onClick={() => setIsOpen(!isOpen)}
          className="accordion-header">
          <span className="accordion-title">{title}</span>
          <span className="accordion-icon">{isOpen ? <FaAngleDown aria-hidden="true" /> : <FaAngleUp aria-hidden="true" />}</span>
        </button>
      </h2>
      {isOpen && <div
        id="accordion-content"
        role="region"
        aria-labelledby="accordion"
        className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion;