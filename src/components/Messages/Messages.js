import React, { Component } from 'react'
import axios from 'axios'


class Messages extends Component {
  state={
    number:''
  }

  componentDidMount(){
    const{ count }=this.props.match.params
    axios.get(`https://cnodejs.org/api/v1/message/${count}`)
    .then(res=>{
      this.setState({
        number:res.data.data
      })
    })
    .catch(err=>{
      alert(err)
    })
  }
  render(){
    return(
      <div className="Messages">
        <div>
          主页 / 新消息
        </div>

      </div>
    )
  }
}

export default Messages
