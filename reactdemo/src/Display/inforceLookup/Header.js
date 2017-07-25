import React, { Component } from 'react';
import AigLogo from '../images/AIG_Logo.jpg';

class Header extends Component {
  render() {
	  
    return(
       <div className = "pageTopArea">
          <div className="topArea">
            <div className="logoControlContainer">
				  <img src={AigLogo} alt="" border="0" />
            </div>
          </div>
       </div>
    );
  }
}

export default Header;
