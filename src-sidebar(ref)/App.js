import React from 'react'
import Button from './component/Button/Button'
import Sidebar from './component/Sidebar/Sidebar'
class App extends React.Component {
  state = {
    show: false
  }
  handleOpen = () => {
    this.setState({
      show: true
    })
  }
  handleClick = () => {
    // this.button 获取的是 Button 组件
    // 利用 ref 在父组件中得到子组件
    // 父组件直接可以调用子组件的方法
    // 父组件就可以改变子组件的状态了
    console.log(this.side)
    // this.button.handleClick()
    this.side.handleShow()
  }
  render () {
    return (
      <div >
        <button onClick={this.handleClick}>按钮</button>
        <Button ref={ btn => { this.button = btn }} click={ this.handleOpen }/>
        <Sidebar ref={ side => { this.side = side }} show={ this.state.show }/>
      </div>
    )
  }
}

export default App
