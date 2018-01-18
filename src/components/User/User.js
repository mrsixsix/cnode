import React from 'react'
import axios from 'axios'
class User extends React.Component {
  state = {
    userinfo:null
  }
  componentDidMount() {
    const { loginname } = this.props.match.params
    axios.get(`https://cnodejs.org/api/v1/user/${loginname}`)
      .then( res => {
        this.setState({
          userinfo : res.data.data
        })
      })
      .catch( err => {
        alert(err)
      })
  }
  render () {
    const { userinfo } = this.state
    console.log(userinfo)
    const intro = userinfo ? (
      <div>
        <img src={userinfo.avatar_url} alt=""/>
        <span>{userinfo.loginname}</span>
        <h4>最近参与的话题</h4>
        {
          userinfo.recent_replies.map( item => {
            return (
              <div key={item.id}>
                <img src={item.author.avatar_url} alt=""/>
                <p>{item.title}</p>
              </div>
            )
          })
        }
        <h4>最近创建的话题</h4>
          {
            (userinfo.recent_topics.length>5?userinfo.recent_topics.slice(0,5):userinfo.recent_topics)
            .map( item => {
              return (
                <div key={item.id}>
                  <img src={item.author.avatar_url} alt=""/>
                  <p>{item.title}</p>
                </div>
              )
            })
          }
      </div>
    ) :'请稍等'
    return (
      <div>
        { intro }
      </div>
    )
  }
}

export default User