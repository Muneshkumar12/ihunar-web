import React from 'react'
import '../../styles/project-sec.css'
import projectImg from '../../images/Project.png'
const ProjectSec = ({ heading, para, btnTitle, onClick }) => {
  return (
    <div className='Project-div'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 project-img'>
            <img src={projectImg} />
          </div>
          <div className='col-12 col-md-6 project-data'>
            <h1>{heading}</h1>
            <p>{para}</p>
            <button onClick={onClick}>{btnTitle}</button>
            {/* <div className="circle-shape1">
          <img src="https://ihunar.com/static/circle-shape1-84499f1a9f5baf6107753940a219d149.png" alt="project" />
        </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSec
