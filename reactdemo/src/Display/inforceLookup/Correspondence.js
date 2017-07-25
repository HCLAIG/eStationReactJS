import React, { Component } from 'react';
import HeaderTag from '../../Display/Header_1.js';
import Footer from '../../Display/Footer.js';
import MenubarTag from '../../Display/Login/Menubar.js';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';
class CorrespondenceSearch extends Component {
render(){
  return(

  <div className="App-searchIntro">
  <HeaderTag/>
  <MenubarTag/>
  <Panel bsStyle='primary'>
  <div className="BacktrackBox">
			<b>
				<Link to="/BasicSearch"> Inforce Basic Search </Link>
				  {'|'}
				<Link to="/AdvancedSearch"> Inforce Advanced Search </Link>
					{'|'}
					<Link to="/DownloadSearch"> Download </Link>
						{'|'}
						<Link to="/BatchPrintSearch"> Batch Print </Link>
							{'|'}
							<Link to="/Correspondence"> Correspondence </Link>
			</b>
			</div>
			<div className="tdContent">
						
							  <div className = "Content">
							  </div>
					
      </div>
    <h3 className ="BacktrackItemCurrent" > Correspondence Search</h3>
  <table className="PrimaryBox" cellspacing="2px" cellpadding="2px" width="40%">
  <tr>
  <td >Policy List</td>
  <td className="PrimaryBoxFormField">
    <textarea className="PrimaryBoxFormField"></textarea>
  </td>
  </tr>


              <tr>
               <td >Producer Last Name</td>
               <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
              </tr>

              <tr>
               <td >Producer First Name</td>
               <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
              </tr>

              <tr>
                <td>Producer Number</td>
                <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25" /></td>
              </tr>

              <tr>
                <td>Agency Number</td>
                <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25" /></td>
              </tr>

              <tr>
                <td >Created</td>
                <td className="PrimaryBoxFormField">
                              <select>
                                  <option></option>
                                  <option>Last 7 days</option>
                                    <option>Last 14 days</option>
                                      <option>Last 30 days</option>
                                        <option>Last 90 days</option>
                                          <option>Selected date range </option>
                                </select>
                      </td>
                    </tr>

                    <tr>
                      <td>Document Types</td>
                      <td><input className="PrimaryBoxFormField" type="checkbox"/>Correspondence</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><input className="PrimaryBoxFormField" type="checkbox"/>Statements</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><input className="PrimaryBoxFormField" type="checkbox"/>Correspondence</td>
                    </tr>


                <span>
                  <input type="button" value="Search" className="PrimaryFormButton"/> &nbsp;&nbsp;&nbsp;
                    <input type="reset" value="Reset Search Criteria" className="PrimaryFormButton"/>
                </span>

  </table>
  </Panel>
   <Footer/>
  </div>

)
}
}

export default CorrespondenceSearch;
