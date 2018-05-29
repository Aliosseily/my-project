import React, { Component } from 'react';
import './Zumba.css';
import Section from './Section';
import ContactUs from './ContactUs'
import Navbar from './Navbar'

class Zumba extends Component{
    constructor(props){
        super(props)
            const src = "https://www.youtube.com/embed/WB3WCRk2waU"
        this.state = {
            videoURL:src
        }
        this.changeVideo = this.changeVideo.bind(this);
    }
    changeVideo(source) {
        this.setState({videoURL: source})
    }
    render(){
        return(
            <div>
            <Navbar/>
            
                <section className='zumba-section' >
                <div class="Zumba-container">
                <div> <p style={{float:"left" , marginLeft:"20px", fontStyle: "normal" ,fontSize:"18px"}} >Zumba</p></div>
                <iframe  className="Zumba-show-video" src={this.state.videoURL} >
                
               </iframe>  
<div class="wrapper">
  <div class="box a" onClick = {() => this.changeVideo("https://www.youtube.com/embed/WB3WCRk2waU")}>
  <img  width="247" height="139" alt="zumba" src={require("../images/zumba2.jpg")} />

  </div>
  <div class="box b" onClick = {() => this.changeVideo("https://www.youtube.com/embed/iQHS1VtvFLM")}>
  <img  width="247" height="139" alt="zumba" src={require("../images/zumba3.jpg")} />
  </div>
  <div class="box c" onClick = {() => this.changeVideo("https://www.youtube.com/embed/T43h__B7WVI")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/zumba5.jpg")} />
  </div>
  <div class="box d" onClick = {() => this.changeVideo("https://www.youtube.com/embed/2wHTZIiGXM4")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/zumba1.jpg")} />
  </div>
  <div class="box e" onClick = {() => this.changeVideo("https://www.youtube.com/embed/muPJ4xPeNIg")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/zumba4.jpg")} />
  </div>
  <div class="box f" onClick = {() => this.changeVideo("https://www.youtube.com/embed/R0-nGbU7M2U")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/zumba6.jpg")} />
  </div>
  <div class="box g" onClick = {() => this.changeVideo("https://www.youtube.com/embed/U3aOl9zBNH0")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/zumba7.jpg")} />
  </div>
  <div class="box h" onClick = {() => this.changeVideo("")}>
  <img  width="247" height="139" alt=" zumba" src={require("../images/zumba8.jpg")} />
  </div>
</div>
</div>
<div class = "ZumbaContactUs">
<ContactUs/>
</div>
</section>
</div>
            
        )
    }
}
export default Zumba