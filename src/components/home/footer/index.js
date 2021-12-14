import React from "react";
import './index.css'

export default function Footer(){
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-l">© 2021 Fair Technology</div>
        <div className="footer-r">
          <a href="#">Twitter</a>
          <div className="footer-r-line"/>
          <a href="#">Discord</a>
        </div>
      </div>
    </div>
  )
}

