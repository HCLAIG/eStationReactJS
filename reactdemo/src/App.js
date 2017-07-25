import React, {Component} from 'react';
import './App.css';
import Login from './Display/Login/Login.js';
import Register from './Display/Registration/eStation-registration.js';
import AgentLookup from './Display/L&C/AgentLookup.js';
import Home from './Display/Home.js';
import Logout from './Display/Login/Logout.js';
import Myaccount from './Display/Myaccount.js';
import ResetPassword from './Display/Login/ResetPassword.js';
import PolicyFilter from './Display/Newbusiness/policy-filter.js';
import Policydetailhtml from './Display/Newbusiness/Policydetail.js';
import PolicyList from './Display/Newbusiness/PolicyList.js';
import RegisterUser from './Display/Registration/registerUser.js';
import AdvancedSearch from './Display/inforceLookup/AdvancedSearch.js';

import BasicSearch from './Display/inforceLookup/BasicSearch.js';
import BatchPrintSearch from './Display/inforceLookup/BatchPrintSearch.js';
import Correspondence from './Display/inforceLookup/Correspondence.js';
import DownloadSearch from './Display/inforceLookup/DownloadSearch.js';

import {Router, Route, browserHistory} from 'react-router'
class App extends Component {
  render() {
    return (      
     <Router history={browserHistory}>
        <Route path='/' component={Login}/>
        <Route path='/Home' component={Home}/>
        <Route path='/AgentLookup' component={AgentLookup}/>  
        <Route path='/RegisterUser' component={RegisterUser}/>           
        <Route path='/Login' component={Login}/>
        <Route path='/Logout' component={Logout}/>
        <Route path='/Myaccount' component={Myaccount}/>
        <Route path='/ResetPassword' component={ResetPassword}/>
        <Route path='/PolicyFilter' component={PolicyFilter}/>
        <Route path='/Policydetailhtml' component={Policydetailhtml}/>
        <Route path='/PolicyList' component={PolicyList}/>
         <Route path='/AdvancedSearch' component={AdvancedSearch}/>
         <Route path='/BasicSearch' component={BasicSearch}/>
         <Route path='/BatchPrintSearch' component={BatchPrintSearch}/>
         <Route path='/Correspondence' component={Correspondence}/>
         <Route path='/DownloadSearch' component={DownloadSearch}/>
           
      </Router>
      
    );
  }
}
export default App;
