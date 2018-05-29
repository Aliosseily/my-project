import React, { Component } from 'react';
import "./AboutPage.css";
import Navbar from './Navbar'
import ContactUs from './ContactUs';

class AboutPage extends Component {
  render(){
    return (
<div>
<Navbar />
 <div className="about-container">
  <div className="about-title">
  <h3>about</h3>
  </div>
  <div className="grid">
    <div className="about-img">
    <img alt="aboutImage" src={require('../images/about.png')} />
    </div>
    <div className="about-name"><span className="name">nick</span><span className="name">erickson</span></div>
    <div className="about-info">
      <p> I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
          Feel free to drag and drop me anywhere you like on your page. 
          I’m a great place for you to tell a story and let your users know a little more about you. 
          This is a great space to write long text about your company and your services.
          You can use this space to go into a little more detail about your company.
          Talk about your team and what services you provide. 
          Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
          Make your company stand out and show your visitors who you are.</p>
          <ul>
            <li>B.P.T. (Bachelor Of Physiotherapy)- Dulton College of Physiotherapy.  </li>
          </ul>
          <p className="details">I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
            Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <ul>
            <li>M.P.T. (Master Of Physiotherapy)- Dulton College of Physiotherapy.</li>
          </ul>
          <p className="details">I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    <ContactUs />      
  </div>
 </div>

    );
  }
}
export default AboutPage