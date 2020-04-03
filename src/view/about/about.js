/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-18 14:23:15
 * @LastEditors: zero
 * @LastEditTime: 2020-03-18 14:34:20
 */
import React from 'react'


class About extends React.Component {
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
      这是about
    </div>
  }
}
export default About;