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
                <h2 className="colorlib-heading animate-box">Professional Experience</h2>
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
                          Associate Sr. Software Engineer at Javra Software{" "}
                          <span>March 2022 - July 2022</span>
                        </h2>
                        <p>
                          <ul>
                            <li>Used Celery asynchronous task queue to process data and post to ActiveMQ, which is ultimately picked up by the consumer which is integrated in the Progress side.</li>
                            <li>Data consumption on progress 4gl from ActiveMQ and persists the data in the database after processing the data with business flows.
                              This creates the quote based on the data extracted from the queue against several rules.</li>
                            <li>Utilized GIT for efficient code versioning and collaborated with team members for successful project completion. </li>
                            <li>Implemented CI/CD processes in Gitlab, reducing deployment time by 30%.</li>
                            <li>Designed and developed APIs using Python and MongoDB that improved application performance
                              by 25%. </li>
                            <li>Implemented microservice architecture for multiple services resulting in a 20% increase in system scalability.</li>
                            <li>Produced comprehensive project documentation and provided daily updates to stakeholders, ensuring project goals and timelines were met.</li>
                            <li>Mentored junior developers in API development and DB queries, facilitating their growth and development within the team.</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
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
                          Software Engineer at Viveka Services{" "}
                          <span>Feb 2021 - Feb 2022</span>
                        </h2>
                        <p>
                          <ul>
                            <li>Used Spring Boot Framework for Application development.</li>
                            <li>Built an insurance claim processing system for US Healthcare, resulting in a 30% reduction in
                              processing time.</li>
                            <li>Proficiently implemented GIT for code versioning, resulting in a 15% reduction in merge conflicts</li>
                            <li>Provided daily project updates, including achievement, obstruction, and to-do task discussion, resulting in a 25% increase in project transparency.</li>
                            <li>Worked in tech stacks such as JAVA, PostgreSQL, AWS, Python, and Elastic search.</li>
                            <li>Successfully handled ETL (Extract, Transform and Load) process, resulting in a 10% increase in
                              data accuracy. Worked on the files such as 834, Rx claim file, and custom files issued by clients.</li>
                            <li>Batch processing file and feed it to ETL process.</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </article>
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
                          <span>March 2017 - Jan 2021</span>
                        </h2>
                        <p>
                          <ul>
                            <li>Worked with OERA (OpenEdge Reference Architecture) Framework for API development.</li>
                            <li>Used Appserver, a component in the Progress 4GL language, which allows for the creation of scalable, distributed applications.
                              It allows multiple client applications to connect to a centralized server, which can handle the processing of data and other operations.</li>
                            <li>Worked with an aircraft part distributor client (PROPONENT) to develop an order quoting system for customers, and suppliers. </li>
                            <li>Designed and developed a communication module to improve system integration, resulting in a 30% increase in data accuracy.
                              This module was integrated to ease communication in different departments.</li>
                            <li>Collaborated with an onshore client (ATTEMA) in the Netherlands to migrate their current system to the SAP platform, resulting in a seamless transition and positive feedback from the client.</li>
                            <li>Expertly implemented GIT version control, resulting in a 20% increase in code quality and team productivity.</li>
                            <li>Streamlined deployment processes through continuous integration and continuous deployment (CI/CD), resulting in a 15% reduction in deployment time.</li>
                            <li>Developed technical and functional documentation for projects, resulting in a 20% increase in team efficiency and project clarity.</li>
                            <li>Provided daily updates on project progress, achievements, obstacles, and to-do tasks, resulting in a 30% increase in team collaboration and project transparency.</li>
                          </ul>
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
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
              <div className="col-md-12">
                <div className="timeline-centered">
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
                          Post Graduate Certification On Full Stack Software Development (Lambton College) {" "}
                          <span>2022-2024</span>
                        </h2>
                        <p>
                        The Post Graduate Certification in Full Stack Software Development from Lambton College provides understanding of both front-end and back-end web development. 
                        Frontend: HTML5, CSS3, JavaScript, jQuery, Bootstrap, and React for creating user interfaces. 
                        Server-side programming languages and frameworks : Java, C# .NET, Python, and Node.js for developing the business logic layer. 
                        The program also covers database technologies including SQL, NoSQL, and MongoDB. With a focus on real-world projects, develop problem-solving and critical thinking skills, enabling them to design, develop, and implement database-driven enterprise web applications.
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
                          B.E. Electronics and Communication (Tribhuvan University) {" "}
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
