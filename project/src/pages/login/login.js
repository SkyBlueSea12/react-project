import React, { Component } from 'react';
import Style from "./login.module.less";
 class Login extends Component {
    render() {
        return (
            <div className={Style.bgCon}>
                 <div className={Style.loginWrap} >
                  <input type='text' placeholder='请输入用户名'/>
                  <input type='text' placeholder='请输入密码'/>
                     <button>登录</button>
                 </div>   
            </div>
        );
    }
}

export default Login;
