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
            <a>Technology enthusiast, love improving things around me.<br /><br /></a>
            <a>Senior QA Automation and Performance engineer for more than 14 years.<br /><br /></a>
            <a>QA Lead & Automation factories managing and monitoring. Own automation & performanceframeworks conception.<br /><br /></a>
            <a>Love sports and healthy life.</a>
          </Section>
          <Section 
            title="Experience" 
            onClick={handleSectionClick} 
            isActive={clickedSection === "Experience"}
          >
            <h3>Mar 2021 / Now - Söderberg & Patners – SQA Engineer<br /><br /></h3>
            <a>• Backend & frontend Automation Testing with Karate framework (Javascript). Managing the whole QA lifetime process.<br /><br /></a>
            <a>• Technology enthusiast, love improving things around me.<br /><br /></a>
            <a>• Working in the core team and responsible of driving to improve CI processes and Framework improvements.<br /><br /></a>
            <a>• SAFE Agile environment.</a>
            <a>• Helping to Performance Testing framework definition and implementation. Gatling, JMeter and LoadRunner.<br /><br /></a>
            <a>• Azure cloud tools.<br /><br /></a>

            <h3>Mar 2017 / Mar 2021 - Solera – SQA Engineer<br /><br /></h3>
            <a>• Performance QA Lead. Own Framework conception; scripting, execution & analysis (Loadrunner & JMeter), based in 3 main layers and CI implementation.<br /><br /></a>
            <a>• International teams managing and teaching/adapting new performance framework and way to work.<br /><br /></a>
            <a>• Automation scripting & execution with Selenium (Java). International teams assisting.<br /><br /></a>

            <h3>Aug 2015 / Mar 2017 - Globe Testing – Solution Architect<br /><br /></h3>
            <a>• QA Lead. Managing, monitoring and teaching to automation factory based at Vitoria (Spain).<br /><br /></a>
            <a>• Bacardi (Barcelona): Automation senior consultant responsible. Analysis, planning and scripting with UFT tool (SAP technology).<br /><br /></a>
            <a>• Vueling (Barcelona): Performance senior consultant responsible. Tests definition, scripting and results analysis (LoadRunner).<br /><br /></a>
            <a>• Others: <br /><br /></a>
            <a>.........° Automation and support. UFT, Mobile Center and Selenium automation testing expert.<br /><br /></a>
            <a>.........° Expo QA 2016 Automation and Performance (with Mobile Center integration) responsible, carrying out presentations and being part of company image.<br /><br /></a>
            <a>.........° Trainer: UFT 12.50 automation tool and ALM 12.20 lifecycle testing tool. Training customers and teammates (official HP courses, best practices and own methodologies).<br /><br /></a>
            <a>.........° ALM (11 and 12) installation, migrations and administration. Admin role.<br /><br /></a>
            <a>.........° PoC’s definition and SoW’s reviewing. New client strategies preparation. Automation / Performance methodologies and PoC’s demos to clients (Barcelona, Alicante and Madrid).<br /><br /></a>

            <h3>Feb. 2010 / Aug 2015 - MTP – QA Automation Engineer<br /><br /></h3>
            <a>• Telefónica OSI:<br /><br /></a>
            <a>.........° QA Lead. Brazilian automation factory managing and monitoring.<br /><br /></a>
            <a>.........° Automation test cases design, creation and execution. QTP and Winrunner.<br /><br /></a>
            <a>• ING Direct:<br /><br /></a>
            <a>.........° Test cases automation design, creation and execution in daily regressions. QTP.<br /><br /></a>
            <a>.........° Implementing Selenium (Java) technology. Functional analyst. Test Plan creation and definition. Quality Center.<br /><br /></a>
            <a>.........° Regression testing execution responsible.<br /><br /></a>
            <a>• HP – CDN:<br /><br /></a>
            <a>.........° Automation environments conception and maintenance. Test cases/Test Plan automation designing, creation and execution. QTP and Selenium (Python and Java).<br /><br /></a>
            <a>.........° Automation processes: DB, Web Services and API.<br /><br /></a>
            <a>.........° Quality Center administration. Installation, monitoring and maintenance. Admin role.<br /><br /></a>
            <a>• Santander Bank:<br /><br /></a>
            <a>.........° Test cases automation design, creation and execute – Abbey Bank (Madrid and Milton Keynes). QTP.<br /><br /></a>
            <a>.........° Functional testing. Test cases/Test Plan creation, design and execution. QC user role<br /><br /></a>

            <h3>Feb. 2009 / 2010 - Freelance – Web developing<br /><br /></h3>
            <a>• Private portal design and development for a web of sales for gymnastics, PHP programming.<br /><br /></a>
            <a>• Private development for a pilot web of sports section in Galapagar (Madrid) local goverment. PHP.<br /><br /></a>
            <a>• HTML portal for a cottage renting in Teruel (Spain).<br /><br /></a>

            <h3>Jan. 2007 / Aug. 2008 - Sopra Profit – Functional analyst<br /><br /></h3>
            <a>• Test Plan design and execution; tracking reports and incidents.<br /><br /></a>
            <a>• QTP automation. Test Cases creation and execution.<br /><br /></a>
            <a>• Functional, technical and user guides documentation review.<br /><br /></a>
            <a>• Assistance for new client offers elaboration. Guides translation for customer’s company.<br /><br /></a>
            <a>• Internal enterprise Tools instructor (Test Link, Mantis, QTP).<br /><br /></a>

            <h3>2004, 2005, 2006 – Several companies – Localization testing<br /><br /></h3>
            <a>• Companies: DL Multimedia, Electronic Arts, Gameloc, Project Synthesis, PMTC N.V.<br /><br /></a>
            <a>• Software localization testing: Proofreading, Translations, grammar issues, bugs tracking.<br /><br /></a>
            <a>• Travel to London in June 2006 with Gameloc company for a localization software project.<br /><br /></a>
            <a>• Travel to Vancouver (Canada) in 2005 with EA company for localization software project.<br /><br /></a>
          
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
              </div>
              <div style={{ flex: 1 }}>
                <h1>Programming</h1>
                <a href="#">Python <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Javascript <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Java <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">VBS <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>          
                <a href="#">C++ <img width="90" height="15" src="/images/2stars.png" /><br></br><br></br></a>
              </div>
              <div style={{ flex: 1 }}>
                <h1>Tools</h1>
                <a href="#">Selenium <img width="90" height="15" src="/images/5stars.png" /><br></br><br></br></a>
                <a href="#">WebDriver <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">UFT <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Karate <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Pytest <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">Jest <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">Cypress <img width="90" height="15" src="/images/2stars.png" /><br></br><br></br></a>
                <a href="#">React <img width="90" height="15" src="/images/2stars.png" /><br></br><br></br></a>
                <a href="#">LoadRunner <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">JMeter <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Gatling <img width="90" height="15" src="/images/2stars.png" /><br></br><br></br></a>
              </div>
              <div style={{ flex: 1 }}>
                <h1>Others</h1>
                <a href="#">Azure Devops <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Jenkins <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Quality Center <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">Jira <img width="90" height="15" src="/images/4stars.png" /><br></br><br></br></a>
                <a href="#">AWS <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
                <a href="#">TestRail <img width="90" height="15" src="/images/3stars.png" /><br></br><br></br></a>
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
            <a>• ISTQB certification in October 2013.<br /><br /></a>
            <a>• Programming course C#.NET 350 hours in 2009 / 2010.<br /><br /></a>
            <a>• Programming course .NET 40 hours in 2009. IBM certified.<br /><br /></a>
            <a>• Programming course .NET 300 hours in 2009. Élogos certified.<br /><br /></a>
            <a>• «Upper Intermediate» certified in British Study Centres in 2008. 6 weeks English course at Brighton.<br /><br /></a>
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
      
    </div>
  );
};

export default App;