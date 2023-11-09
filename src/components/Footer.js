import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
 
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://digvijayraut10@gmail.com">
          <EmailIcon />
          </a>
      <a href="https://github.com/digvijay1801">
          <GithubIcon />
          </a>
        <a href="https://www.linkedin.com/in/digvijay-raut-254a7724a">
          <LinkedInIcon />
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
