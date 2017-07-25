import React, { Component } from 'react';
import HeaderTag from '../../Display/Header_1.js';
import Footer from '../../Display/Footer.js';
import MenubarTag from '../../Display/Login/Menubar.js';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';
class BatchPrint extends Component {
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
    <h3 className ="BacktrackItemCurrent" >Inforce Batch Print Search</h3>
  <table className="PrimaryBox" cellspacing="2px" cellpadding="2px" width="40%">
  <tr>
  <td >Policy List</td>
  <td className="PrimaryBoxFormField">
    <textarea className="PrimaryBoxFormField"></textarea>
  </td>
  </tr>

  <tr>
    <td >Anniversary</td>
    <td className="PrimaryBoxFormField">
								<select>
								  <option value="">select</option>
								  <option value="January">January</option>
								  <option value="Feburary">Feburary</option>
								  <option value="March">March</option>
								  <option value="April">April</option>
								  <option value="May">May</option>
								  <option value="June">June</option>
								  <option value="July">July</option>
								  <option value="August">August</option>
								  <option value="September">September</option>
								  <option value="October">October</option>
								  <option value="November">November</option>
								  <option value="December">December</option>
								</select>
          </td>through
								<select>
								  <option value="">select</option>
								  <option value="January">January</option>
								  <option value="Feburary">Feburary</option>
								  <option value="March">March</option>
								  <option value="April">April</option>
								  <option value="May">May</option>
								  <option value="June">June</option>
								  <option value="July">July</option>
								  <option value="August">August</option>
								  <option value="September">September</option>
								  <option value="October">October</option>
								  <option value="November">November</option>
								  <option value="December">December</option>
								</select>                
		
								
        </tr>

        <tr>
          <td >Issue year</td>
          <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25" /></td>
        </tr>

        <tr>
         <td >Insured Last Name</td>
         <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
        </tr>

        <tr>
         <td >Insured Zip Code</td>
         <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
        </tr>

        <tr>
         <td >Insured Age</td>
         <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
        </tr>

        <tr>
          <td >Insured Birth Month</td>
          <td className="PrimaryBoxFormField">
								<select>
								  <option value="">select</option>
								  <option value="January">January</option>
								  <option value="Feburary">Feburary</option>
								  <option value="March">March</option>
								  <option value="April">April</option>
								  <option value="May">May</option>
								  <option value="June">June</option>
								  <option value="July">July</option>
								  <option value="August">August</option>
								  <option value="September">September</option>
								  <option value="October">October</option>
								  <option value="November">November</option>
								  <option value="December">December</option>
								</select>
                </td>
              </tr>

              <tr>
                <td>Owner Last Name</td>
                <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25" /></td>
              </tr>

              <tr>
               <td >Producer Last Name</td>
               <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
              </tr>

              <tr>
                <td>Agency Number</td>
                <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25" /></td>
              </tr>

              <tr>
               <td >Premium Min</td>
               <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
              </tr>

              <tr>
               <td >Premium Max</td>
               <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
              </tr>

              <tr>
               <td >Face Amount Min</td>
               <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
              </tr>

              <tr>
               <td >Face Amount Max</td>
               <td><input type="text" className="PrimaryBoxFormField" size="25" /></td>
              </tr>

              <tr>
                <td >Product Type</td>
                <td className="PrimaryBoxFormField">
                                <select>
                                  <option>All Products</option>
                                  <option>Traditional</option>
                                  <option>Traditional - Whole Life Only</option>
                                  <option>Traditional - Term</option>
                                  <option>Universal Life</option>
                                  <option>Universal Life - Fixed Only</option>
                                  <option>Universal Life - Variable Only</option>
                                  <option>Annuity</option>
                                  <option>Annuity - Fixed Only</option>
                                  <option>Annuity - Variable Only</option>
                                  <option>Disability</option>
                                  <option>Accident and Health</option>
                                  <option>Long Term Care</option>
                                </select>
                      </td>
                    </tr>

                <span>
                  <input type="button" value="Search" className="PrimaryFormButton"/>&nbsp;&nbsp;&nbsp;
                    <input type="reset" value="Reset Search Criteria" className="PrimaryFormButton"/>
                </span>

  </table>
  </Panel>
   <Footer/>
  </div>

)
}
}

export default BatchPrint;
