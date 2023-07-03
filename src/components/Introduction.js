import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/photo.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc" style={{marginTop:120}}>
                          <p>
                            <a
                              className="btn btn-primary btn-learn "
                              href="https://github.com/SaajanJoshi/portfolio/blob/master/Resume/SAAJAN-N.-JOSHI.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              My Resume
                              <i className="icon-download4" />
                            </a>
                          </p>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/SaajanJoshi"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Introduction;
