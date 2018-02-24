import React, { Component } from 'react'
import axios from 'axios'
import './author.css'
import { Link } from 'react-router-dom'


class Author extends Component {
  state={
    userInfo:null
  }

  componentDidMount(){
    const{loginname}=this.props.match.params
    axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
    .then(res=>{
      this.setState({
        userInfo: res.data.data
      })
    })
    .catch(err=>{
      alert(err)
    })
  }

  componentWillReceiveProps(nextProps) {
    const{loginname}=nextProps.match.params
    axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
    .then(res=>{
      this.setState({
        userInfo: res.data.data
      })
    })
    .catch(err=>{
      alert(err)
    })
  }
  render(){
    const {userInfo} =this.state
    const intro= userInfo ?(
      <div className='author'>
        <img src={userInfo.avatar_url} alt=""/>
        <span>{userInfo.loginname}</span>
        <h4>最近参与的话题</h4>
        {
          (userInfo.recent_replies.length>5 ? userInfo.recent_replies.slice(0,5): userInfo.recent_replies).map(item=>{
            return(
              <div key={item.id}>
                <Link to={`/user/${item.author.loginname}`} ><img src={item.author.avatar_url} alt=""/></Link>
                <p><Link to={`/topic/${item.id}`}>{item.title}</Link></p>
              </div>
            )
          })
        }
        <h4>最近创建的话题</h4>
        {
          (userInfo.recent_topics.length>5 ? userInfo.recent_topics.slice(0,5) : userInfo.recent_topics).map(item=>{
            return(
              <div key={item.id}>
                <img src={item.author.avatar_url} alt=""/>
                <p><Link to={`/topic/${item.id}`}>{item.title}</Link></p>
              </div>
            )
          })
        }
      </div>
    ):'请稍等'
    return(
      <div className="Author">
        {intro}
      </div>
    )
  }
}

export default Author
