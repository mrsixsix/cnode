import React from 'react'

import ShowTopics from '../ShowTopics/ShowTopics'
import "./home.css"
import axios from 'axios'
class Home extends React.Component{
state={
  data:[],
  tab:"all"
}
getData=(tab)=>{
   axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab !== 'all' ? tab : ''}`)
  .then((res)=>{
    this.setState({
      data:res.data.data
    })
  })
  .catch((err)=>{
    alert(err)
  })
}
handleClick = (tab) => {
	 this.getData(tab)
    this.setState({
      tab:tab
    })
    
  }
componentDidMount(){
 this.getData("all")
}
render () {
 let tabs = [{
      tab:'all',
      text:'全部'
    },{
      tab:'good',
      text:'精华'
    },{
      tab:'share',
      text:'分享'
    },{
      tab:'ask',
      text:'问答'
    },{
      tab:'job',
      text:'招聘'
    },{
      tab:'dev',
      text:'客户端测试'
    }]
 const {data,tab}=this.state
    return (
        <div>
        	<div className="tabs">
            {tabs.map((item,index)=>(
              <span key={index} onClick={()=>{this.handleClick(item.tab)}} className={`${tab===item.tab&&"active"}`}>{item.text}</span>
            ))}
   				</div>     	
          <ShowTopics data={data}/>
        </div>
    )
  }
}
export default Home