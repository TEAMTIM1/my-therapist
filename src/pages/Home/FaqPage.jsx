
import React, { useState } from 'react';

const FaqPage = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionToggle = (index) => {
      if (index === activeAccordion) {
        setActiveAccordion(null); // Ferme l'accordéon s'il est déjà ouvert
      } else {
        setActiveAccordion(index); // Ouvre l'accordéon s'il est fermé
      }
    };
  return (
    <div className='bg-[#DBCAF4]'>
    <div className="collapse gap-4">
      <input
        type="radio"
        name="my-accordion-2"
        checked={activeAccordion === 0}
        onChange={() => handleAccordionToggle(0)}
      />
      <div
        className={`collapse-arrow bg-base-200 shadow-2xl w-[300px] ${
          activeAccordion === 0 ? 'open' : ''
        }`}
      >
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>
            hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur iste totam veritatis laudantium, magni obcaecati.
          </p>
        </div>
      </div>

      <input
        type="radio"
        name="my-accordion-2"
        checked={activeAccordion === 1}
        onChange={() => handleAccordionToggle(1)}
      />
      <div
        className={`collapse-arrow bg-base-200 ${
          activeAccordion === 1 ? 'open' : ''
        }`}
      >
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      <input
        type="radio"
        name="my-accordion-2"
        checked={activeAccordion === 2}
        onChange={() => handleAccordionToggle(2)}
      />
      <div
        className={`collapse-arrow bg-base-200 ${
          activeAccordion === 2 ? 'open' : ''
        }`}
      >
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FaqPage