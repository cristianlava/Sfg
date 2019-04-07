import React, { Component } from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import SFGMain from './containers/SFGmain'
import Nav from './containers/Nav'
import './App.css'

library.add(fab)
class App extends Component {

  state = {
    clicked: true
  }

  handleBtn = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render() {
    return (
      <div>
        <Nav clicked={this.state.clicked} />
        <SFGMain handleBtn={this.handleBtn} clicked={this.state.clicked} />
      </div>
    );
  }
}

export default App;
