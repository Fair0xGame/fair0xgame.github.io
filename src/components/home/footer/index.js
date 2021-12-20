import React from "react";
import './index.css'

export default function Footer(){
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-l">© 2021 Fair Technology</div>
        <div className="footer-r">
          <a href="https://twitter.com/FairGameOnline" target="_blank">Twitter</a>
          <div className="footer-r-line"/>
          <a href="https://discord.gg/bGZtPcABDm" target="_blank">Discord</a>
        </div>
      </div>
    </div>
  )
}

