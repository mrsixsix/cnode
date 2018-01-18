import React from 'react'
import $ from 'jquery'
class Button extends React.Component {
  state={
    text:'open'
  }
  handleClick = () => {
    // this.props.click()
    //原生获取 dom 节点
    // console.log(document.getElementsByClassName('btn')[0])
    //第三方插件 jquery
    // console.log($('.btn'))
    // react 获取真实 dom
    // 标签有个 ref = { btn => this.xx = btn }
    // ref 函数内部的参数 btn 代表的就是 真实 dom
    // this.xx = btn 将真实dom 赋值给组件的 xx 属性
    // console.log(this.xx)
    this.setState({
      text:'改了'
    })
  }
  render () {
    return (
      <button ref={ btn => {this.xx = btn} }      onClick={this.handleClick}
        className='btn'>{this.state.text}</button>
    )
  }
}

export default Button
