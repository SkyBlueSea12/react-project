import React, { Component } from 'react';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';
import Home from './pages/home/home';
import User from './pages/user/user';
import {HashRouter,Link,Switch,Redirect,Route} from "react-router-dom"
 class RootRouter extends Component {
    render() {
        return (
            <HashRouter>
                
                       <Switch>
                              <Redirect exact from='/' to='/login'></Redirect>
                              <Route exact path="/login" component={Login}></Route>
                              <Route path="/admin" component={()=>{
                                   return (
                                     <Admin>
                                          <Route exact path='/admin/home' component={Home}></Route>
                                          <Route exact  path='/admin/user' component={User}></Route>
                                     </Admin>
                                    )
                              }}></Route>
                            
                       </Switch>
                 
            </HashRouter>
        );
    }
}

export default RootRouter;
