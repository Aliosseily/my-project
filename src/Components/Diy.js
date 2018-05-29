import React, { Component } from 'react';
import './Diy.css';
import Section from './Section';
import ContactUs from './ContactUs'
import { YoutubePlaylist } from './YoutubePlaylist'

export const Diy = () => 
<div>
    <div>
        <YoutubePlaylist playlistId='PLM-fy-VblSIQ6C4x-j5dweqdRTlA8UUtD'/>
    </div>

    <div>
    <div className = "DiyContactUs">
    <ContactUs/>
    </div>
        
    </div>

</div>
export default Diy


