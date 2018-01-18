import React from 'react'
import "./header.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
class Header extends React.Component{
	state={
		login:false,
		token:"",
		userinfo:null
	}
	handleLogin=()=>{
		const{token}=this.state
		axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:token})
		.then(res=>{
			
			sessionStorage.token = token
			// localStorage.token = token
			this.setState({
				login:true,
				userinfo:res.data
			})
		})
		.catch(err=>{
			alert(err)
		})
	}
	handleLogOut=()=>{
		sessionStorage.clear('token')
		this.setState({
				login:false,
		token:"",
		userinfo:null
			})
	}
	 handleChange = e => {
    
    this.setState({
      token: e.target.value
    })
  }
	render() {
		const {login,token,userinfo}=this.state
		console.log(userinfo)
		return (
			<div className="header">
						<div className="logo">
							<Link to="/">
							<img style={{width:'200px'}} src='https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg' alt="111" />
							</Link>
						</div>
				
					{login ? (
						<div className="login">
						<Link to={`/user/${userinfo.loginname}`}>
            <img className='author-pic' src={userinfo.avatar_url} alt="111"/></Link>
            <Link to='/topic/create'>发布文章</Link>
            <button onClick={this.handleLogOut}>退出</button></div>
            ):(
            <div className="login">
						<input type="text" value={token}  onChange={this.handleChange}/>
						<button onClick={()=>{this.handleLogin()}}>登录</button>
					</div>
					)}
			</div>
		)
	}
}
export default Header

