import React, { Component } from 'react';
import './About.css';
import Section from './Section';

class About extends Component{
    render(){
        return(
            <section>
            <h2>About</h2>
            <div className="border"></div>
            <div className='par'>
            <p>Mini Studio is ... I’m a paragraph.
             Double click here or click Edit Text to add 
             some text of your own or to change the font.
              This is the place for you to tell 
              your site visitors a little bit about you 
              and your services.</p>
            </div>
            </section>
            
        )
    }
}
export default About