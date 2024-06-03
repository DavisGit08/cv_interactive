import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="section-container">
        <div className="section-group">
          <Section title="Introduction"></Section>
          <Section title="Summary">I'm a technology lover who loves to make people's lives easier; this is the reason I like the QA world.</Section>
          <Section title="Experience">Experience content</Section>
          <Section title="Tools">Tools content</Section>
          <Section title="Certifications">Certifications content</Section>
          <Section title="Contact">Contact content</Section>
        </div>
      </div>
      <div className="social-links-container">
        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="C:\Users\isabe\Desktop\David\Programming\cv_interactive\src\images\github_icon.png" className="social-icon" />
        </a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="images/github_icon.png" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default App;