import React from 'react';
import "../../node_modules/picnic/picnic.min.css";
import "./Navbar.css";
import DropDown from './DropDown'

class Navbar extends React.Component  {
    state = {servicesisOpen: false, videosisOpen: false}
    services = () => {
        this.setState({servicesisOpen:!this.state.servicesisOpen, videosisOpen:false})
        console.log(this.state.servicesisOpen + " " + this.state.videosisOpen)
    }
    videos = () => {
        this.setState({videosisOpen:!this.state.videosisOpen, servicesisOpen:false})
        console.log(this.state.servicesisOpen + " " + this.state.videosisOpen)
    }
    render(){

        return (
    <div className="nav">
        <img className="logo" alt="Ministudio logo" src={require("../images/logo.png")} />
        <nav className="navbar">

        {/* responsive */}
        <input id="bmenub" type="checkbox" className="show" />
        <label htmlFor="bmenub" className="burger pseudo button">&#8801;</label>

        <div className="menu">
        <label htmlFor="bmenub" className="hide-menu">&times;</label>
            <a href="home" className="new pseudo icon-picture">home</a>
            <DropDown className="services-menu" title="services" isOpen={this.state.servicesisOpen} change={this.services} >
                <a className="pseudo icon-picture">Video Production</a>
                <a className="pseudo icon-picture">BIRTHDAYS</a>
                <a className="pseudo icon-picture">EVENTS</a>
                <a className="pseudo icon-picture">Live Shows</a>
                <a className="pseudo icon-picture">Summer Camp</a>
            </DropDown>
            <DropDown className="videos-menu" title="videos" isOpen={this.state.videosisOpen} change={this.videos}>
                <a href="diy"className="pseudo icon-picture">DIY</a>
                <a href="zumba" className="pseudo icon-picture">ZUMBA</a>
            </DropDown>
            <a href="#" className="new pseudo icon-picture">store</a>
            <a href="about" className="new pseudo icon-picture">about</a>
            <a href="#" className="new contact-link pseudo icon-picture">contact</a>


        </div>
    </nav>

    </div>
      )
    }
}

export default Navbar;