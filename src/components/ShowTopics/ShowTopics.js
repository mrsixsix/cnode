import React, { Component } from 'react'
import './showtopics.css'
import { Link } from 'react-router-dom'

class ShopTopics extends Component {

  render(){
    let { data } =this.props
    // console.log(data);
    let ShopTopics = data.length !== 0 ? data.map(item=>{
      return(
        <div key={item.id} className='box'>
          <Link to={`/user/${item.author.loginname}`} ><img src={item.author.avatar_url} alt=""/></Link>
          <span className='count'>{item.reply_count}/{item.visit_count}</span>
          <span className={`top ${(item.top || item.good) && 'active'}`}>{item.top?'置顶':item.good?'精华':item.tab==='share'?'分享':'问答'}</span>
          <span className='title'><Link to={`/topic/${item.id}`}>{item.title}</Link></span>
        </div>
      )
    }): <h1>请稍等</h1>
    return(
      <div className="ShopTopics">
        {ShopTopics}
      </div>
    )
  }
}

export default ShopTopics
