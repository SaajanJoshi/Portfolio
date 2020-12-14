import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer at Javra Software{" "}
                          <span>March 2017-Present</span>
                        </h2>
                        <p>
                          <ul>
                          <li>Design and develop a communication module to communicate between systems.</li>
                          <li>Research in platform modules, design patterns and software architecture.</li>
                          <li>Provide solutions for design and logic implementation in projects.</li>
                          <li>Create designs, flowcharts and algorithms for APIs' and methods.</li>
                          <li>Write unit tests for modules</li>
                          <li>Worked with a client onshore in Netherland on July 2019, migrating current system to SAP platform.</li>
                          <li>Worked in ERP platform developed by JAVRA, implemented several features such as dynamic pagination, charts, rich text editor and stabilizing the platform.</li>
                          <li>Proficient in GIT implementation</li>
                          <li>Deployment of codes through CI/CD.</li>
                          <li>Create technical and functional document of project.</li>
                          <li>Provide daily updates on the project which includes achievement, obstruction and to-do task discussion.</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation from Tribhuvan University(Nepal)
                          <span>2011-2015</span>
                        </h2>
                        <p>
                          I finished my Undergradaute in 2015 majoring in
                          Electronics & Communication Engineering. I took
                          courses like C,C++,Microprocessor, Digitial Signal
                          Processing. I was also leading member of the
                          Electronics Engineering Society. I was also part of
                          Robotics Association of Nepal which is a non-profit
                          organization during my final year. My GPA was 3.2.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
