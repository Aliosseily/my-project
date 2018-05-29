import React, { Component } from 'react';
import './WhatToDo.css'
import Square from './Square'
import Section from './Section'
import Title from './Title'


class WhatToDo extends Component{
    render(){
        return(
            <div>
            <Section src="images/waves.jpg">
                <Title> WHAT WE DO </Title>  
                <div className="box" style={{width:'100%',height:'100%',marginLeft:'0px'}}>
                    {/* <div className="flex three center five-600"> */}
                    <div className="square-main"><Square title="Production"  body="square" url="/production"/></div>
                    <div className="square-main"><Square src='/images/pic1.jpg' className="image body"/></div>
                    <div className="square-main"><Square title="Entertainment" body="square" url="/entertainment"/></div>
                    <div className="square-main"><Square src='/images/pic2.jpg' className="image body"/></div>
                    <div className="square-main"><Square title="Live Shows" body="square" url="/liveshows"/></div>
                </div>
            </Section>
          </div>
        )
    }
}
export default WhatToDo