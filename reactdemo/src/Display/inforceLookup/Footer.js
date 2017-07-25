import React, { Component } from 'react';
import $ from 'jquery';

class Footer extends Component {
  render() {
    return(

      <div id="footerContainer">
    	   <div id="bottomNavContainer">

				<ul>
					<li>
						<a href="/Producer/BottomNav/BrowserRequirements">Browser Requirements</a>
					</li>
						::
					<li>
						<a target="_blank" href="/Display/Messaging/EMailWebmaster.aspx">Contact Us</a>
					</li>
						::
					<li>
						<a href="/Producer/BottomNav/PrivacyPolicy">Privacy Policy</a>
					</li>
						::
					<li>
						<a href="/Producer/BottomNav/PrivacyStatement">Privacy Statement</a>
					</li>
				</ul>

                   <span className="footerSpan">
                        Copyright © 2004 - 2017 All rights reserved. -- Reference #: 01
                   </span>
        </div>
      	<div id="contentFooter">

      	</div>
    </div>
    );
  }
}

export default Footer;
