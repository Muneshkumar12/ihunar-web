import React from 'react'
import Layout from '../../layout';
import { PageHeader, SecHeader } from '../../components';
import '../../styles/about-us.css';
import aboutUsImg from '../../images/about-img-poster.png'
const AboutUs = () => {
  return (
    <Layout>
      <PageHeader pageName="About Us" />
      <div className='about-us'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 about-sec-header'>
              <img src={aboutUsImg} alt='about us' />
            </div>
            <div className='col-12 col-md-6 about-sec-data'>
              <SecHeader title="ABOUT IHUNAR" heading="Excellent IT services for your success" para="We Are Increasing Business Success With Technology. Over 1 year working in IT services developing software applications, websites and mobile apps for clients all over the World." />
            </div>
          </div>
        </div>
        <div className='container about-sec-2' >
          <div className='row'>
            <div className='col-12 col-md-4' >
              <h1 className='about-sec-data-2'>Our Mission</h1>
              <p className='about-sec-data-2-para'>To cater to every Software need, Swiftly and Effectively</p>
            </div>
            <div className='col-12 col-md-4'>
              <h1 className='about-sec-data-2'>Our Vision</h1>
              <p className='about-sec-data-2-para'>To be the best software solution provider in the world, helping change the world of Technology through our top-notch Software Engineering Solutions4</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs;
