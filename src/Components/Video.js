import React, { Component } from 'react';

import './Video.css'

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://video.wixstatic.com/video/e04112_0fc47f3f1bd04f289435361bff3e55b8/1080p/mp4/file.mp4'
        }
    }
    
    render () {
        return (
          <div className="videocontainer">
            <video  className="video" loop autoPlay muted >
                <source  src={this.state.videoURL} type="video/mp4" />
               </video>
                     <div className = "videobtn" >Watch more </div>

                              </div>
                              )
                            }
                          }; 
export default Video;

