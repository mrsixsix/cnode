import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import axios from 'axios'

class Header extends Component {
  state ={
    login:false,
    token:'',
    userInfo:null
  }
  componentDidMount() {
    // sessionStorage 本地存储
    if(sessionStorage.token==='af78807c-044e-4656-b425-d3f690e5e8a1'){
      axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:sessionStorage.token})
      .then(res=>{
        this.setState({
          login: true,
          userInfo: res.data
        })
      })
      .catch(err=>{
        alert(err);
      })
    }
  }
  handleChange = e =>{
    this.setState({
      token:e.target.value
    })
  }
  handleClick =()=>{
    const{token}=this.state
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:token})
    .then(res=>{
      sessionStorage.token =token
      this.setState({
        login: true,
        userInfo: res.data
      })
    })
    .catch(err=>{
      alert(err);
    })

  }
  handleOut =()=>{
    sessionStorage.clear('token')
    this.setState({
      login: false,
      userInfo: null,
      token:''
    })
  }
  render(){
     const { token, login, userInfo } = this.state
    return(
      <div className="Header">
        <Link to='/'>
          <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="vv"/>
        </Link>

        {
          login ? (
            <div className='me'>
              <Link to={`/user/${userInfo.loginname}`}><img src={userInfo.avatar_url} alt="" /></Link>
              <Link to='/'><button onClick={this.handleOut}>退出</button></Link>
              <button className='fabu'><Link to='/topic/create'> 发布</Link></button>

            </div>
          ):(
            <div>
              <input type="text" value={token} onChange={this.handleChange}/>
              <button onClick={this.handleClick}>登录</button>
            </div>
          )
        }
        <ul className="nav pull-right">
          <li><Link to="/">首页</Link></li>

          <li>
            <Link to="/message/count">
              未读消息
            </Link>
          </li>

          <li><Link to="/getstart">新手入门</Link></li>
          <li><Link to="/api">API</Link></li>

          <li><Link to="/about" target="">关于</Link></li>


          <li><Link to="/setting">设置</Link></li>
          <li>
            <Link to="/signout" data-method="post" rel="nofollow">退出</Link>
          </li>

        </ul>
      </div>
    )
  }
}

export default Header
