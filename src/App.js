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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <h1>Languages</h1>
                <a href="#">Spanish <img width="90" height="15" src="/images/5stars.png" alt="" /><br></br><br></br></a>
                <a href="#">English <img width="90" height="15" src="/images/4stars.png" alt="" /></a><br></br><br></br>
                <h1>Programming</h1>
                <a href="#">Python <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Javascript <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Java <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">VBS <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>          
              </div>
              <div style={{ flex: 1 }}>
                <h1>Tools</h1>
                <a href="#">Selenium <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">WebDriver <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">UFT <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Karate <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Cypress <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">LoadRunner <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">JMeter <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Gatling <img width="90" height="15" src="/images/2stars.png" /><br></br><br></br></a>
              </div>
              <div style={{ flex: 1 }}>
                <h1>Others</h1>
                <a href="#">Azure Devops <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">AWS <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">Docker <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">Kubernetes <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>          
              </div>
            </div>
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