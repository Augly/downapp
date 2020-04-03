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
import { getLatestRelease } from "@/api/index.js"
import tsIcon from '@/asstes/images/logo@2x.png';
import topIcon from '@/asstes/images/top2x.png';

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
      <img src={tsIcon} alt="" className="shareLogo"/>
    </div>
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
    if (isWeiXin()){
      this.setState(state => ({
        show: true
      }))
    }else{
      getLatestRelease({
        appDictId:3
      }).then((result) => {
        if(result){
          if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            window.location.href = result.result.iosUrl; //ios app协议
          }
          if (navigator.userAgent.match(/android/i)) {
            window.location.href = result.result.androidUrl; //android 下载地址
          }
        }
      }).catch((err) => {
        
      });
    }
    
  }
  hideShow (e) {
    this.setState((state) => ({
      show: false
    }))
  }
  render () {
    return <div className="wrap">
      <img src={topIcon} alt="" className="toplogo" />
      {this.state.show && <Mask onClick={this.hideShow} />}
      <div className='button-transparent' onClick={this.onloadDown}>立即下载</div>
    </div>
  }
}

export default Index;