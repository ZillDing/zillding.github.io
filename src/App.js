import React, { Component } from 'react'
import { Flex, Item } from 'react-flex'
require('react-flex/index.css')

export class App extends Component {
  render() {
    const rootStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: 'auto'
    }
    const itemStyle = {
      margin: 5
    }
    const createItem = o => (
      <Item flex={0} style={itemStyle}>{o}</Item>
    )

    return (
      <Flex
        column
        justifyContent="center"
        style={rootStyle}>
        { createItem(<Avatar/>) }
        { createItem(<h4>Zill Ding</h4>) }
        { createItem(<p>Full Stack Developer</p>) }
        { createItem(<Github/>) }
        { createItem(<Twitter/>) }
        { createItem(<Facebook/>) }
        { createItem(<GooglePlus/>) }
        { createItem(<Medium/>) }
      </Flex>
    )
  }
}

const linkStyle = {
  marginLeft: 5
}

const Avatar = () => (
  <img
    className="ui centered circular image"
    src="http://www.gravatar.com/avatar/9af45a0d5e1c3330dfb195733953b63c?s=150" />
)

const Github = () => (
  <div>
    <i className="fa fa-github fa-lg"></i>
    <a href="https://github.com/zillding" style={linkStyle}>
      zillding
    </a>
  </div>
)

const Twitter = () => (
  <div>
    <i className="fa fa-twitter fa-lg"></i>
    <a href="https://twitter.com/ZillDing" style={linkStyle}>
      @ZillDing
    </a>
  </div>
)

const Facebook = () => (
  <div>
    <i className="fa fa-facebook-official fa-lg"></i>
    <a href="https://www.facebook.com/zeyu.ding.1" style={linkStyle}>
      Zeyu Ding
    </a>
  </div>
)

const GooglePlus = () => (
  <div>
    <i className="fa fa-google-plus"></i>
    <a href="https://plus.google.com/u/0/+ZeyuDing" style={linkStyle}>
      Zeyu Ding
    </a>
  </div>
)

const Medium = () => (
  <div>
    <i className="fa fa-medium"></i>
    <a href="https://medium.com/@ZillDing" style={linkStyle}>
      Zill Ding
    </a>
  </div>
)
