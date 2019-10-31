import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const data = [
    {
        name:'首页',
        path:'/admin/home',
        keys:'/admin/home'
    },
    {
        name:'用户管理',
        path:'/admin/user',
        keys:'/admin/user',
        children:[{
            name:'权限管理',
            path:'/admin/root',  
            keys:'/admin/root',
            children:[
                {
                    name:"权限修改",
                    path:"/admin/modify",
                     keys:"/admin/modify"
                }
            ]
        },
        {
            name:'信息管理',
            path:'/admin/info',
            keys:'/admin/info'
        }
          
        ]
    },
    {
        name:'设置',
        path:'/admin/setting',
        keys:'/admin/setting'
    }
]

 class CustomSlider extends Component {
    
    changeRoute=(path)=>{
        this.props.history.push(path)
        console.log(111)
       
    }
    renderItem=(data)=>{
       return data.map((item,index)=>{
              if(item.children){
                  return (<SubMenu key={item.keys} title={item.name}>
                              {this.renderItem(item.children)}
                          
                    </SubMenu>)
              }else{
                  return (<Menu.Item key={item.keys} onClick={this.changeRoute.bind(this,item.path)}>{item.name}</Menu.Item>)
              }
        })   
    }

    render() {
        console.log(this)
        return (
            <Menu style={{ width: 256 }} mode="vertical" theme='dark'>
           
                {this.renderItem(data)}
          
            </Menu>
        );
    }
}

export default withRouter(CustomSlider);
