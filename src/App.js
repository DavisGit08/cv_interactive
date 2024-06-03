import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';

const App = () => {
  const [clickedSection, setClickedSection] = useState(null);

  const handleSectionClick = (title) => {
    setClickedSection(title);
  };

  return (
    <div className="container">
      <Header />
      <div className="section-container">
        <div className="section-group">
          <Section title="Introduction" className="first-section"  onClick={handleSectionClick}></Section>
          <Section title="Summary" onClick={handleSectionClick}>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.</Section>
          <Section title="Experience" onClick={handleSectionClick}>Experience content</Section>
          <Section title="Tools" onClick={handleSectionClick}>Tools content</Section>
          <Section title="Certifications" onClick={handleSectionClick}>Certifications content</Section>
          <Section title="Contact" onClick={handleSectionClick}>Contact content</Section>
        </div>
      </div>
      <div className="social-links-container">
        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="social-link linkedin"></a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link github"></a>
      </div>
      <img className="david-image" />
    </div>
  );
};

export default App;