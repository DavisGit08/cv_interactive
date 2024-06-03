import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';

const App = () => {
  const [clickedSection, setClickedSection] = useState(null);

  const handleSectionClick = (title) => {
    if (title === clickedSection) {
      setClickedSection(null); // Si se hace clic en la misma sección, cierra el contenedor
    } else if (title === "Introduction") {
      setClickedSection(null); // Si se hace clic en "Introduction", cierra cualquier contenedor abierto
    } else {
      setClickedSection(title); // Abre el contenedor de la sección clicada
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="section-container">
        <div className="section-group">
          <Section 
            title="Introduction" 
            onClick={handleSectionClick} 
            isActive={clickedSection === "Introduction"} 
          />
          <Section 
            title="Summary" 
            onClick={handleSectionClick} 
            isActive={clickedSection === "Summary"}
          >
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
            <a>I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.<br /><br /></a>
          </Section>
          <Section 
            title="Experience" 
            onClick={handleSectionClick} 
            isActive={clickedSection === "Experience"}
          >
            Experience content
          </Section>
          <Section 
            title="Tools" 
            onClick={handleSectionClick} 
            isActive={clickedSection === "Tools"}
          >
            Tools content
          </Section>
          <Section 
            title="Certifications" 
            onClick={handleSectionClick} 
            isActive={clickedSection === "Certifications"}
          >
            Certifications content
          </Section>
          <Section 
            title="Contact" 
            onClick={handleSectionClick} 
            isActive={clickedSection === "Contact"}
          >
            Contact content
          </Section>
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