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
    const linkStyle = {
      marginLeft: 5
    }

    return (
      <div>
        <img
          className="circle responsive-img"
          src="http://www.gravatar.com/avatar/9af45a0d5e1c3330dfb195733953b63c?s=150" />
        <h5>Zill Ding</h5>
        <p>Full Stack Developer</p>
        <p>
          <i className="fa fa-github fa-lg"></i>
          <a href="https://github.com/zillding" style={linkStyle}>
            zillding
          </a>
        </p>
        <p>
          <i className="fa fa-twitter fa-lg"></i>
          <a href="https://twitter.com/ZillDing" style={linkStyle}>
            @ZillDing
          </a>
        </p>
        <p>
          <i className="fa fa-facebook-official fa-lg"></i>
          <a href="https://www.facebook.com/zeyu.ding.1" style={linkStyle}>
            Zeyu Ding
          </a>
        </p>
        <p>
          <i className="fa fa-google-plus"></i>
          <a href="https://plus.google.com/u/0/+ZeyuDing" style={linkStyle}>
            Zeyu Ding
          </a>
        </p>
        <p>
          <i className="fa fa-medium"></i>
          <a href="https://medium.com/@ZillDing" style={linkStyle}>
            Zill Ding
          </a>
        </p>
      </div>
    )
  }
}
