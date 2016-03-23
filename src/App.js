import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="valign-wrapper" style={{height: '100%'}}>
        <div className="valign center" style={{width: '100%'}}>
          <Content />
        </div>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <img
          className="circle responsive-img"
          src="http://www.gravatar.com/avatar/9af45a0d5e1c3330dfb195733953b63c?s=150" />
        <h5>Zill Ding</h5>
        <p>Full Stack Developer</p>
      </div>
    )
  }
}
