import React from 'react';

const Section = ({ title, children, onClick, isActive }) => {
  const handleToggle = () => {
    onClick(title); // Notifica al padre que este título se ha clicado
  };

  return (
    <section className="section">
      <h2 className={`section-title ${isActive ? 'clicked' : ''}`} onClick={handleToggle}>
        {title}
      </h2>
      {isActive && (
        <div className="content-container">
          <div className="content">{children}</div>
        </div>
      )}
    </section>
  );
};

export default Section;