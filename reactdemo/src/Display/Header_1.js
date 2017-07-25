import React, {Component} from 'react';
import logo from '../Display/images/AIG_Logo.jpg';
import '../Display/css/privateDefault.css';
import '../bootstrap/css/bootstrap-theme.css';
import '../bootstrap/css/bootstrap.css';
import {  Link } from 'react-router';
import {  
    Navbar,
    Nav,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';
export default class Header_1 extends Component {
    render() {
        return (            
                <div id="pageTopArea">
                    <div id="topArea">&nbsp;
                        <div id="logoControlContainer">
                            <img src={logo} alt="AIG"/>&nbsp;&nbsp;
                        </div>
                        <div>
                            <Navbar bsStyle="tabs">
                                <Nav pullRight>
                                    <Navbar.Form pullRight>
                                        <FormGroup>
                                            <FormControl type="text" placeholder="Search"/>
                                        </FormGroup>
                                        {' '}
                                        <Button type="submit">Search</Button>
                                    </Navbar.Form>
                                    <Navbar.Text pullRight>
                                        <Link to="/Myaccount">My Account &nbsp;</Link>::
                                        <Link to="/Logout">&nbsp;Logout</Link>
                                    </Navbar.Text>
                                </Nav>
                            </Navbar>
                        </div>                       
                    </div>
                </div>
            
        );
    }
}