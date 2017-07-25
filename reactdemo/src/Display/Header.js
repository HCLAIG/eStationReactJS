import React, {Component} from 'react';
import logo from '../Display/images/AIG_Logo.jpg';

export default class Header extends Component {
    render() {
        return (
            <div id="pageTopArea">
                <div id="topArea">&nbsp;
                    <div id="logoControlContainer">
                          <img src={logo} alt="AIG"/>&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        );
    }
}