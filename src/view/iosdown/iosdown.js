/*
 * @Descripttion : 
 * @version      : 1.0.0
 * @Author       : 
 * @Date         : 2023-08-02 13:49:17
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2023-09-12 12:48:46
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
import style from './index.less'
// import { getLatestRelease } from "@/api/index.js"
import tsIcon from '@/asstes/images/logo@2x.png';
import titlelogo from '@/asstes/images/titlelogo.png';
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
    super(props)
    this.state = {
      show: false
    }
    this.onloadDownsweet = this.onloadDownsweet.bind(this)
    this.onloadDowntest = this.onloadDowntest.bind(this)
    this.hideShow = this.hideShow.bind(this)
  }
  onloadDownsweet (e) {
    e.preventDefault();
    if (isWeiXin()) {
      this.setState(state => ({
        show: true
      }))
    } else {
      window.location.href = ''; //ios app协议
    }
  }
  onloadDowntest (e) {
    e.preventDefault();
    if (isWeiXin()) {
      this.setState(state => ({
        show: true
      }))
    } else {
      window.location.href = ''; //ios app协议
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
      <div className={style.content}>
        <div className='titlegroup'>
          <img src={titlelogo} alt='' className='titlelogo' />
          <h2 className='title'>安装步骤</h2>
          <img src={titlelogo} alt='' className='titlelogo' />
        </div>
        <div className='contentAll'>
          <div className='contentAll_main'>
            <p>1.先安装苹果官方软件【TestFlight】(已安装
              请直接到第 2 步），然后返回本页面；</p>
            <div className='downButton_test' onClick={this.onloadDowntest} />
            <p>2.完成步骤 1  Testflight之后，直接点击安装app</p>
            <div className='downButton_sweet' onClick={this.onloadDownsweet} />
            <p className='tip'>* 如遇到“TestFlight不可用”或者【无法载入app】，
              可以安装使用专用修复插件，安装完毕后重新下载，
            </p>
          </div>
        </div>
      </div>
      <div className='bottom-right'></div>
      {this.state.show && <Mask onClick={this.hideShow} />}
    </div>
  }
}

export default Index;