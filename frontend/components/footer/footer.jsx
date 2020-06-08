import React from 'react';

const Footer = () => {
  return (
    <div className="about-ecletsy-footer">
      <div className="about-box">
        <div className="what-is-ecletsy">
          What is Ecletsy?
        </div>
        <div className="about-parts">
          <div className="about-div-1">
            <h3>A one-of-a-kind community</h3>
            <p>Ecletsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</p>
          </div>
          <div className="about-div-2">
            <h3>Support independent creators</h3>
            <p>There’s no Ecletsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
          </div>
          <div className="about-div-3">
            <h3>Peace of mind</h3>
            <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
          </div>
        </div>
      </div>
      <div className="wave-box">
        <p> Created by &nbsp; Jayasree Suryadevara </p>
        <div>
          <a href="https://github.com/JayasreeSuryadevara/Ecletsy" target="_blank"><i className="fab fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/jayasree-suryadevara-98066415/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
          <a href="https://angel.co/u/jayasree-suryadevara" target="_blank"><i className="fab fa-angellist fa-2x"></i></a>
          <a href="https://jayas.page/" target="_blank"><i className="fas fa-link fa-2x"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;