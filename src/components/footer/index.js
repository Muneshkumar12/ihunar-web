import React from 'react'
import '../../styles/footer.css'
import logoImg from '../../images/logo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <img src={logoImg} alt='ihunar' className='footer-logo' />
                        <p className="footer-para">iHunar is the software and IT solution providing Company in Pakistan. We provide top notch Software Solutions combined with advanced learning through the iHunar Training Academy.</p>
                        <div className='footer-social-icons'>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-2'>
                        <h1 className='footer-page-heading'>Pages</h1>
                        <a href='#' className='footer-pages-anchor'>Home</a>
                        <a href='#' className='footer-pages-anchor'>About</a>
                        <a href='#' className='footer-pages-anchor'>Our Team</a>
                        <a href='#' className='footer-pages-anchor'>Internship</a>
                        <a href='#' className='footer-pages-anchor'>Jobs</a>
                        <a href='#' className='footer-pages-anchor'>Contact</a>
                    </div>
                    <div className='col-12 col-md-6 footer-contact'>
                        <h1 className='footer-contact-heading'>Contact us </h1>
                        <div className='footer-contact-inner'><i className="fa-sharp fa-solid fa-location-dot"></i> <p className='footer-contact-para'> 1st Floor Kallar House, North Colony, Mithi, Pakistan</p></div>
                        <div className='footer-contact-inner'><i className="fa-solid fa-phone-volume"></i> <a className='footer-contact-anchor'>+92-33-22511711</a></div>
                        <div className='footer-contact-inner'><i className="fa-regular fa-envelope"></i> <a className='footer-contact-anchor'>info@ihunar.com</a></div>
                        <div className='footer-contact-inner'><i className="fa-regular fa-clock"></i> <p className='footer-contact-para'>Opening Hours: 09:00 - 17:00</p></div>
                    </div>
                </div>
            <div className='footer-last'>
                <hr />
                <p className='last-para'>© 2023 All Rights Reserved. iHunar Private Limited</p>
            </div>
            </div>
        </div>
    )
}

export default Footer;
