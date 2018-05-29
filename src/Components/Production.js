import React from 'react'
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import Section from './Section'
// import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
import './Activities.css'
import  FaBriefcase  from 'react-icons/lib/fa/briefcase'

const Production = () => {
    return(
        <div className="main">
            <Navbar />
            <div className="container">
            <Section>
                <div class="flex one">
                    <div>
                        <article class="card">
                            <p className="icon"><FaBriefcase /></p>
                            <h1>Production</h1>                            
                            <p>Comming Soon...</p>
                        </article>
                    </div>
                </div>
            </Section>
            </div>
            <ContactUs />
        </div>
    )
}

export default Production;