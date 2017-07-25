import React, {Component} from 'react';
import '../bootstrap/css/bootstrap-theme.css';
import '../bootstrap/css/bootstrap.css';

export default class Footer extends Component {
    render() {
        return (

            <div id="footerContainer">
                <div id="bottomNavContainer">
                    <ul>
                        <li>
                            <a href="/Producer/BottomNav/BrowserRequirements">Browser Requirements</a>
                        </li>
                        ::
                        <li>
                            <a target="_blank" href="/Display/Messaging/EMailWebmaster.aspx?docid=471">Contact Us</a>
                        </li>
                        ::
                        <li>
                            <a href="/Producer/BottomNav/PrivacyStatement">Privacy Statement</a>
                        </li>
                    </ul>
                    <small>
                        Copyright &copy; 2004 - 2017 All rights reserved. -- Reference #: 01
                    </small>

                </div>

            </div>

        );
    }
}