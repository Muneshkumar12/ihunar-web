import React from 'react';
import '../../styles/working-process.css';
const WorkingProcessSec = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 ">
          <div className="timeline-div">
            <div className="timeline-data">
              <div className="count-box"><span>1</span></div>
              <div>
                <h3 className="timeline-heading">Requirements</h3>
                <p className="timeline-para"> Our Project Management team collect requirement and analyse them for preparing road map, sprint and initiate plan.</p>
              </div>
            </div>
            <div className="timeline-data">
              <div className="count-box">2</div>
              <div>
                <h3 className="timeline-heading">Planning</h3>
                <p className="timeline-para"> iHunar Project Management team breakdown the all requirements and set priorities and in the last iterate them for scheduling.                </p>
              </div>
            </div>
            <div className="timeline-data-3">
              <div className="count-box">3</div>
              <div>
                <h3 className="timeline-heading">Design</h3>
                <p className="timeline-para">Share architecture spike analysis, design and implement the prototype.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 ">
          <div className="timeline-div">
            <div className="timeline-data">
              <div className="count-box"><span>4</span></div>
              <div>
                <h3 className="timeline-heading">Development</h3>
                <p className="timeline-para">iHunar Project Management team breakdown the all requirements and set priorities and in the last iterate them for scheduling.</p>
              </div>
            </div>
            <div className="timeline-data timeline-data-5" >
              <div className="count-box">5</div>
              <div>
                <h3 className="timeline-heading">Testing</h3>
                <p className="timeline-para">Team will work on testing, identify defects, and resolve those bugs.</p>
              </div>
            </div>
            <div className="timeline-data-3">
              <div className="count-box">6</div>
              <div>
                <h3 className="timeline-heading">Release & Review</h3>
                <p className="timeline-para">Demonstrate the user's stories, implemented and done to the product owner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkingProcessSec;
