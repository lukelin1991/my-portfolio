import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
						<div className="blog-entry">
							<a href="https://medium.com/@lukelin1991/who-wouldve-thunk-it-solution-to-asynchronous-code-in-redux-c51916541bd9" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
							<div className="desc">
								<span><small>April 2, 2020 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 2</small></span>
								<h3><a href="https://medium.com/@lukelin1991/who-wouldve-thunk-it-solution-to-asynchronous-code-in-redux-c51916541bd9">Who would've Thunk it</a></h3>
								<p>So what is thunk? its a function that returns, or calls on another function.  You've probably have done this before with vanilla JS, without knowing.</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
						<div className="blog-entry">
							<a href="https://medium.com/@lukelin1991/class-is-in-session-literally-57e6f95048c1" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
							<div className="desc">
								<span><small>February 21, 2020</small> | <small> Web Development </small> | <small> <i className="icon-bubble3" /> 0</small></span>
								<h3><a href="https://medium.com/@lukelin1991/class-is-in-session-literally-57e6f95048c1">Class is in session... literally</a></h3>
								<p>In a world, where Pokemon reigns supreme... Comes a new unlikely challenger.. The... COOKIEMON...ster.</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
						<div className="blog-entry">
							<a href="https://medium.com/@lukelin1991/setting-params-in-life-discipline-cd4e4af74654" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
							<div className="desc">
								<span><small>February 3, 2020</small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 0</small></span>
								<h3><a href="https://medium.com/@lukelin1991/setting-params-in-life-discipline-cd4e4af74654">Setting params in life.</a></h3>
								<p>If we want to create ourselves as a new instance of "Software Developer", it takes a certain grit, it takes a certain amount of sacrifice, and it takes a certain amount of parameter setting.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
						<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
