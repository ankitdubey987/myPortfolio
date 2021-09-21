import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                <img src={data.master_image} className="" alt="#curaj" width="25%"></img>
                  <h3 className="mb-0">{data.master_university}</h3>
                  <div className="subheading mb-3">{data.master_degree}</div>
                  <p>{data.master_gpa}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{data.master_fromDate} - {data.master_toDate}</span>
                </div>
              </div>
            ))
          }
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                <img src={data.image_uni} className="" alt="#rmlau" width="20%"></img>
                  <h3 className="mb-0">{data.university}</h3>
                  <div className="subheading mb-3">{data.degree}</div>
                  <p>{data.gpa}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{data.fromDate} - {data.toDate}</span>
                </div>
              </div>
            ))
          }
          {
            this.education.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                <img src={data.school_img} className="" alt="#kv" width="25%"></img>
                  <h3 className="mb-0">{data.School}</h3>
                  <div className="subheading mb-3">{data.Academics}</div>
                  <p>{data.tenth}</p>
                  <p>{data.twelfth}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{data.fromDate1} - {data.toDate1}</span>
                </div>
              </div>
            ))
          }

        </div>
      </section>
    );
  }
}

export default Education;
