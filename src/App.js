import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Projects from './components/projects'
import Blog from './components/blog'
import About from './components/about'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar />
            <div id="colorlib-main">
              <Introduction />
              <About />
              <Timeline />
              <Projects />
              <Blog />
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
