import React, {Component} from 'react';

import widget from '../Display/images/widge.gif';
import '../Display/css/privateDefault.css';
import '../bootstrap/css/bootstrap-theme.css';
import '../bootstrap/css/bootstrap.css';

import HeaderTag from '../Display/Header_1.js';
import Footer from '../Display/Footer.js';
import MenubarTag from '../Display/Login/Menubar.js';


import {
    Table,
    Panel
    
} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div >
                <HeaderTag/>
                <MenubarTag/>
                <Panel defaultExpanded>
                    <Table >
                       
                            <tr >
                                <td valign="top" width="40%">
                                    <br/>
                                </td>
                                <td valign="top" width="40%">
                                    <br/>
                                </td>
                                <td valign="top" width="30%">
                                    <Table >                                       
                                            <tr >
                                                <td>
                                                    <Panel>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Message</th>
                                                                </tr>
                                                            </thead>
                                                           
                                                                <tr>
                                                                    <td>Welcome to : <b> {window.sessionStorage.getItem('Usename')}</b></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><u>Change email Address</u></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>You have 0 read messgage
                                                                        <br/>Get messages</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><hr/>
                                                                       &nbsp; <b> My Links</b><br/>
                                                                        <br/>
                                                                         &nbsp; <img src={widget} alt="" />&nbsp;<a href="/Inforce">Inforce </a> 
                                                                        <br/>&nbsp; <img src={widget} alt="" />&nbsp;<a href="Pending" >Pending </a> 
                                                                        <br/> &nbsp; <img src={widget} alt="" />&nbsp;<a href="Inforce Lookup"> Inforce Lookup </a>
                                                                        <br/> &nbsp; <img src={widget} alt="" />&nbsp;<u> <a href="/AgentLookup">Agent Lookup </a> </u>
                                                                    </td>
                                                                </tr>
                                                            
                                                        </Table>
                                                    </Panel>
                                                </td>
                                            </tr>
                                       
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                       
                    </Table>
                </Panel>
                < Footer/>
            </div>
        );
    }
}