import React, { Component } from 'react';


class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.volunteer = props.volunteer;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="volunteer">
        <div className="w-100">
          <h2 className="mb-5">Volunteer Experience</h2>
          <ul className="fa-ul mb-0">
          {
            this.volunteer.map((data, index) => (
              <li key={index}>
                <img src={data.image} className="mb-2 ml-2" width="5%" alt="{data.role}"></img>
                <span className="ml-2"> {data.role} </span>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Volunteer;
