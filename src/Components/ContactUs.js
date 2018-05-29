import React from 'react';
import Section from './Section'
import Title from './Title'
import './ContactUs.css'
import Map from './Map.js'

const ContactUsTitle = ({ text }) => (
    <Title level={2} className="contact-us-title">
        <span>{text}</span>
    </Title>
)

const ContactUsPart = (props) => (<div className="contact-us-part" {...props} />)

const ContactUsContent = (props) => <div className="contact-us-content flex one two-600" {...props} />

const ContactUs = () => (
    <div>
        <Section className="contact-us flex one two-800" color="rgba(204, 16, 19, 1)">
            <ContactUsPart>
                <ContactUsTitle text="FIND US" />
                <ContactUsContent>
                    <div className="map full" style={{ height: 261 }}> <Map /> </div>
                    <div className="small">
                        <p>Qobayat Street, Beirut</p>
                        <p>Email: info@ministudioclub.tv</p>
                        <p>Tel: +961 3 85 86 87</p>
                    </div>
                    <div className="small">
                        <p>Opening Hours:</p>
                        <p>Mon - Fri: 9am - 5pm </p>
                        <p>​​Saturday: 10am - 3pm ​</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="social-media full">
                        <a target="_blank" rel="noopener noreferrer" className="social-icon icon-facebook" href="//facebook.com/ministudio">
                            <img className='facbook-icon' src='https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/e0678ef25486466ba65ef6ad47b559e1.png' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="social-icon icon-youtube" href="//facebook.com/ministudio">
                            <img className='youtube-icon' src='https://static.wixstatic.com/media/e9bb463a1bc4434c9d33b81b1fe937f5.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/e9bb463a1bc4434c9d33b81b1fe937f5.png' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="social-icon icon-instagram" href="//facebook.com/ministudio">
                            <img className='instagram-icon' src='https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/da7ef6dd1302486c9a67baebe4b364bc.png' />
                        </a>
                    </div>
                </ContactUsContent>
            </ContactUsPart>
            <ContactUsPart>
                <ContactUsTitle text="CONTACT" />
                <ContactUsContent>
                    <form className="flex full" style={{ marginRight: 'auto', width: '16em', marginLeft: 'auto' }}>
                        <div className="input half-600"><input type="text" name="name" placeholder="Name" /></div>
                        <div className="input half-600"><input type="text" name="email" placeholder="Email" /></div>
                        <div className="input full"><input type="text" name="subject" placeholder="Subject" /></div>
                        <div className="input full"><textarea rows={10} name="message" placeholder="Message" /></div>
                        <div className="input full"><button class="full half-500 third-800" style={{ width: '14.8em' }}>send</button></div>
                    </form>
                </ContactUsContent>
            </ContactUsPart>
        </Section>
        <div className='footer' >
            <p class="font_8">© 2018 - All rights reserved</p>
            <div className="">
                <a href="//facebook.com/ministudio">
                    <img className='facbook-icon' src='https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/4057345bcf57474b96976284050c00df.png' />
                </a>
                <a href="//facebook.com/ministudio">
                    <img className='youtube-icon' src='https://static.wixstatic.com/media/45bce1d726f64f1999c49feae57f6298.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/45bce1d726f64f1999c49feae57f6298.png' />
                </a>
                <a href="//facebook.com/ministudio">
                    <img className='instagram-icon' src='https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01/e1aa082f7c0747168d9cf43e77046142.png' />
                </a>
            </div>
        </div>
    </div>
)

export default ContactUs