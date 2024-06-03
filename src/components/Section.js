import React, { useState } from 'react';

const Section = ({ title, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="section">
      <h2 className={`section-title ${isClicked ? 'clicked' : ''}`} onClick={handleToggle}>
        {title}
      </h2>
      {isClicked && (
        <div className="content-container">
          <div className="content">{children}</div>
        </div>
      )}
    </section>
  );
};

export default Section;