import React, {Component} from 'react';
// import './css/IDPScreen001.css'; import './css/IDPScreen002.css';
import HeaderTag from '../../Display/Header_1.js';
import Footer from '../../Display/Footer.js';
import MenubarTag from '../../Display/Login/Menubar.js';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';
class AdvancedSearch extends Component {
  render() {
    return (

      <div>
        <HeaderTag/>
        <MenubarTag/>
        <div className="BacktrackBox">
          <b>
            <Link to="/BasicSearch">
              Inforce Basic Search
            </Link>
            {'|'}
            <Link to="/AdvancedSearch">
              Inforce Advanced Search
            </Link>
            {'|'}
            <Link to="/DownloadSearch">
              Download
            </Link>
            {'|'}
            <Link to="/BatchPrintSearch">
              Batch Print
            </Link>
            {'|'}
            <Link to="/Correspondence">
              Correspondence
            </Link>
          </b>
        </div>
        <div className="tdContent">

          <div className="Content"></div>

        </div>
        <Panel bsStyle='primary'>
          <h3 className="BacktrackItemCurrent">Inforce Advanced Search</h3>
          <form action="" name="advancedSearch">
            <table className="PrimaryBox" cellspacing="2px" cellpadding="2px" width="40%">
              <tr>
                <td >Report</td>
                <td className="PrimaryBoxFormField">
                  <select>
                    <option>Inforce List Sorted By Insured</option>
                    <option>Inforce List Sorted By Premium</option>
                    <option>Inforce List Sorted By Product</option>
                    <option>Inforce Work in Progress</option>
                    <option>Inforce Conservation</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td >Policy#</td>
                <td><input className="PrimaryBoxFormField" type="text" size="25" maxlength="10"/></td>
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
                <td>
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
                <td >Issue year</td>
                <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25"/></td>
              </tr>

              <tr>
                <td >Insured Last Name</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
              </tr>

              <tr>
                <td >Insured Zip Code</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
              </tr>

              <tr>
                <td >Insured Age</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
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
                <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25"/></td>
              </tr>

              <tr>
                <td >Producer Last Name</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
              </tr>

              <tr>
                <td >Producer First Name</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
              </tr>

              <tr>
                <td >Producer Number</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
                <td>leading zeros are required</td>
              </tr>

              <tr>
                <td>Agency Number</td>
                <td><input className="PrimaryBoxFormField" type="text" maxlength="4" size="25"/></td>
              </tr>

              <tr>
                <td >Premium Min</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
              </tr>

              <tr>
                <td >Premium Max</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
              </tr>

              <tr>
                <td >Face Amount Min</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
              </tr>

              <tr>
                <td >Face Amount Max</td>
                <td><input type="text" className="PrimaryBoxFormField" size="25"/></td>
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

              <tr>
                <td>Policy Status</td>
                <td><input className="PrimaryBoxFormField" type="checkbox"/>Active</td>
              </tr>
              <tr>
                <td></td>
                <td><input className="PrimaryBoxFormField" type="checkbox"/>Lapse Pending</td>
              </tr>
              <tr>
                <td></td>
                <td><input className="PrimaryBoxFormField" type="checkbox"/>Lapsed</td>
              </tr>
              <tr>
                <td></td>
                <td><input className="PrimaryBoxFormField" type="checkbox"/>Reinstatement Pending</td>
              </tr>
              <tr>
                <td></td>
                <td><input className="PrimaryBoxFormField" type="checkbox"/>Claim</td>
              </tr>
              <tr>
                <td></td>
                <td><input className="PrimaryBoxFormField" type="checkbox"/>Inactive</td>
              </tr>
              <tr>
                <td></td>
                <td><input className="PrimaryBoxFormField" type="checkbox"/>Other</td>
              </tr>
              <br/>
              <tr>
                <td></td>
                <td>

                  <input type="button" value="Search" className="PrimaryFormButton"/>

                </td>
                <td>
                  <input
                    type="reset"
                    value="Reset Search Criteria"
                    className="PrimaryFormButton"/></td>
              </tr>

            </table>
          </form>
        </Panel>

        <Footer/>
      </div>

    )
  }
}

export default AdvancedSearch;
