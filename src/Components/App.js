import React, { Component } from 'react';
import 'picnic/picnic.min.css';

import './App.css';
import Navbar from './Navbar'
import Video from './Video'
import About from './About'
import PhotoGallery from './PhotoGallery';
import LatestVideos from './LatestVideos';
import WhatToDo from './WhatToDo';
import ContactUs from './ContactUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Video />
        <About />
        <PhotoGallery />
        <LatestVideos />
        <WhatToDo />
        <ContactUs />
      </div>
    );
  }
}

export default App;
