import React from 'react';
import Button from '../components/Buttons/Button';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="button-group">
        <Button text="User Login" />
        <Button text="Clinic Login" />
        {/* <Button text="Govt Login" /> */}
      </div>

      <footer className="footer">
        <p>
          ©Content developed as part of <span className="highlight">Smart India Hackathon (SIH)</span> project.<br />
          This platform is conceptualized and maintained by <span className="highlight">Team Xcoders</span>.<br />
          Designed and developed for SIH 2025 problem statement <span className="highlight">“Integration of NAMASTE and ICD-11 with Two EHR Systems.”</span><br />
          Last Updated: <span className="highlight">08/09/2025</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
