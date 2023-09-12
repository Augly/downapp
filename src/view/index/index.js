/*
 * @Descripttion : 
 * @version      : 1.0.0
 * @Author       : 
 * @Date         : 2023-08-02 13:49:17
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2023-09-12 11:37:26
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-16 16:17:45
 * @LastEditors: zero
 * @LastEditTime: 2020-03-26 16:57:01
 */
import React from 'react'
import './index.less'
// import { getLatestRelease } from "@/api/index.js"
import tsIcon from '@/asstes/images/logo@2x.png';
import { withRouter } from 'react-router-dom';

function isWeiXin () {
  if (navigator.userAgent.match(/(MicroMessenger|micromessenger);?/i)) {
    return true; // 是微信端
  } else {
    return false;
  }
}
class Mask extends React.Component {
  render () {
    return <div className="mask" onClick={this.props.onClick}>
      <img src={tsIcon} alt="" className="shareLogo" />
    </div>
  }
}

class Index extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      show: false
    }
    this.onloadDown = this.onloadDown.bind(this)
    this.hideShow = this.hideShow.bind(this)
  }
  onloadDown (e) {
    e.preventDefault();
    if (isWeiXin()) {
      this.setState(state => ({
        show: true
      }))
    } else {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        console.log('ios')
        this.props.history.push('/iosdown');
      }
      if (navigator.userAgent.match(/android/i)) {
        console.log('android')
        window.location.href = 'https://sweetclub.s3.ap-east-1.amazonaws.com/apk/app-release.apk'; //android 下载地址
      }
    }

  }
  hideShow (e) {
    this.setState((state) => ({
      show: false
    }))
  }
  render () {
    return <div className="wrap">
      <div className='top-left'></div>
      <div className='titile'>
        <h2 className='t_1'>專屬年輕人</h2>
        <h2 className='t_2'>的社交平台</h2>
      </div>
      <div className='content'>
        <div className='logo'></div>
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
        <div className="ball5"></div>
      </div>
      {this.state.show && <Mask onClick={this.hideShow} />}
      <div className='button-transparent' onClick={this.onloadDown}>立即下载</div>
      <div className='bottom-right'></div>
    </div>
  }
}

export default withRouter(Index);