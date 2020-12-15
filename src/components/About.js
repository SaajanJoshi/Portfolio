import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p className="textjustify">
                      I am a proactive professional having 3+ years of experience as software engineer. During my time as software engineer, I have learned a lot: requirement analysis,
                      design,development and deployment. I have always enjoyed solving logical problems: it extends the learning curve, and programming is best 
                      platform to exploit it. I believe that sharing knowledge with each other is best way to teach each other and is the best form of the human kind. 
                      So, being positive is the best way to move forward.
                      </p>  
                      <p className="textjustify">
                      Beside programming , I like playing console games, watching and playing football and binge watching movies/series on netflix. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Api and web development </h3>
                    <p className="textjustify">
                      I have got experience in developing API using Progress 4gl.
                      Moreover,I am also familiar with frontend such as react.js, jQuery
                      and backend such as python as well.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p className="textjustify">
                      I have a good grasp of the fundamentals of Data Structure
                      and Algorithm.It is really important to optimize our code
                      and to do so, we should have a very good knowledge of DSA.
                      I found it to be the one of the most important skill for a
                      programmer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Software Engineering/Database</h3>
                    <p className="textjustify">
                      I also have knowledge of how the software should be
                      developed beginning from the requirement phase to the
                      deployment phase.I have worked in an Agile Environment
                      which has taught me a lot about how the software should be
                      made.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
