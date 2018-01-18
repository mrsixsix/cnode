import React from 'react'
import './sidebar.css'
class Sidebar extends React.Component {
  state={
    show : false
  }
  //更新 props 的时候就修改 state ，只能从生命周期函数内修改
  //componentWillReceiveProps
  componentWillReceiveProps(nextProps) {
    console.log(this.props.show,nextProps.show)
    if(nextProps.show)this.setState({show:true})
  }
  handleShow = () => {
    this.setState({
      show : true
    })
  }
  handleClose = e => {
    if(e.target === e.currentTarget)this.setState({show:false})
  }
  render () {
    return (
      <div className='sidebar-wrap'
        style={{ width: this.state.show ? '100vw' : 0,opacity:this.state.show ? 1 : 0  }}
        onClick={ this.handleClose }>
        <div className='sidebar'
          style={{ marginLeft: this.state.show ? 0 : '-200px' }}>
          <h3>Sidebar</h3>
        </div>
      </div>
    )
  }
}

export default Sidebar
