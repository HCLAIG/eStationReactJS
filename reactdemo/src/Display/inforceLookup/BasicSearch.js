import React, {Component} from 'react';
import $ from 'jquery';
import HeaderTag from '../../Display/Header_1.js';
import Footer from '../../Display/Footer.js';
import MenubarTag from '../../Display/Login/Menubar.js';
import {Panel} from 'react-bootstrap';
import {Link} from 'react-router';
class BasicSearch extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    var filterSearch;
    $("#ErrorDisplay").css("visibility", "hidden");
    $('#btnBasicSrch').click(function () {
      var bSrch = ["searchForText"];
      filterSearch = bSrch;
      for (var i = 0; i < bSrch.length; i++) {
        var txtValue = $("#" + bSrch + "").val();
        if (txtValue == null || txtValue == '' || txtValue == 0) {
          $("#ErrorDisplay").css("visibility", "visible");
          $("#ErrorDisplay").css("color", "#600");
        } else {
          window.location = "http://localhost:3002/#/about/";
        }
      }
    });
  }

  render() {
    return (

      <div className="App-searchIntro">
        <HeaderTag/>
        <MenubarTag/>
        <Panel bsStyle='primary'>
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
            <hr/>
          </div>
          
          <ul class="Size100">
            <li class="MessageText_Error" id="ErrorDisplay">
              Your profile allows you to create potentially large reports. We ask that you
              enter selection criteria to limit the resulting report.
            </li>
          </ul>
          <h3 className="BacktrackItemCurrent">Inforce Basic Search</h3>
          <form action="" name="basicSearch">
            <table className="PrimaryBox" cellspacing="2px" cellpadding="2px" width="40%">
              <tr>
                <td >Report</td>
                <td
                  className="PrimaryBoxFormField"
                  id="basicSearchReport"
                  name="basicSearchReport">
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
                <td className="PrimaryBoxFormField" id="searchFor">
                  <select>
                    <option>Search for Insured Last Names starting with</option>
                    <option>Search for Owner Last Names starting with</option>
                    <option>Search for Policy Numbers starting with</option>
                    <option>Search for Producer Last Names starting with</option>
                    <option>Search for Agency Numbers starting with</option>
                  </select>
                </td>
                <td><input type="text" size="25" id="searchForText"/></td>
              </tr>

              <span>
              <br/>
                <input
                  type="button"
                  value="Search"
                  id="btnBasicSrch"
                  className="PrimaryFormButton"/> &nbsp;&nbsp;&nbsp;
                <input
                  type="Reset"
                  value="Reset Search Criteria"
                  className="PrimaryFormButton"/>
              </span>

            </table>

          </form>
        </Panel>
        <Footer/>
      </div>

    )
  }
}

export default BasicSearch;
