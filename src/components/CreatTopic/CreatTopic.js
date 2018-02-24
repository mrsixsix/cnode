import React, { Component } from 'react'
import axios from 'axios'
import './creat.css'

class CreatTopic extends Component {
  state ={
    title:'',
    content:''
  }
  handleTitle= e=>{
    this.setState({
      title:e.target.value
    })
  }
  handleContent= e=>{
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit=()=>{
    const data={
      accesstoken:sessionStorage.token,
      title:this.state.title,
      content:this.state.content,
      tab:'dev'
    }
    axios.post('https://cnodejs.org/api/v1/topics',data)
    .then(res=>{
      console.log(res);
      this.setState({
        title:'',
        content:''
      })
      this.props.history.push(`/topic/${res.data.topic_id}`)
    })
    .catch(err=>{
      alert(err)
    })
  }
  render(){
    return(
      <div className='wrap'>
        <div className="CreatTopic">
          <span>题目：</span><input type="text"
            placeholder='请输入十个字以上'
            value={this.state.title} onChange={this.handleTitle}/><br/>
          <p>内容：</p><textarea value={this.state.content}
            onChange={this.handleContent}
          ></textarea><br/>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
      </div>
    )
  }
}

export default CreatTopic
