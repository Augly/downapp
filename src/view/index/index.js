/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-16 16:17:45
 * @LastEditors: zero
 * @LastEditTime: 2020-03-17 15:00:04
 */
import React from 'react'
import './index.less'

class Mask extends React.Component {
  render () {
    return <div className="mask" onClick={this.props.onClick}>这是弹框</div>
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.onloadDown = this.onloadDown.bind(this)
    this.hideShow = this.hideShow.bind(this)
  }
  onloadDown (e) {
    e.preventDefault();
    this.setState(state => ({
      show: true
    }))
  }
  hideShow (e) {
    this.setState((state) => ({
      show: false
    }))
  }
  render () {
    return <div className="wrap">
      {this.state.show && <Mask onClick={this.hideShow}>12121</Mask>}
      <div className='button-transparent' onClick={this.onloadDown}>立即下载</div>
    </div>
  }
}
export {
  Index
}