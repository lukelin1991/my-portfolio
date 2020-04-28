import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Frontend Developer at CoronaTracker <span> March 2020 - present</span></h2>
                        <p>I recently joined an amazing team, and we are building out the CoronaTracker web app, visit www.coronatracker.me for more information.  I have been helping build out small components with react and redux, adding to the CoronaTracker.  I also manage the discord chat for the team to better collaborate and coordinate the efforts for this Open Sourced Project.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduated from Flatiron School <span>January 2020 - April 17, 2020</span></h2>
                        <p>I graduated from Flatiron School with a certification in Software Engineering.  I specialize in HTML, CSS, Ruby - Sinatra, Ruby on Rails. and JavaScript - React, Redux. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Work <span> 2014 - 2019 </span></h2>
                        <p>I've worked a wide variety of jobs, ranging from an operations manager at an electric company to working as a phone reseller at a phone refurbishing company, to owning my own business.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduated from the University of Valley Forge <span>2009 - 2014</span></h2>
                        <p>I graduated from the University of Valley Forge back in 2014 with a Bachelors of Music.  I graduated as a Music Performance Major with a focus on Contemporary Vocal Performance.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
