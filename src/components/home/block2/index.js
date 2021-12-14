import React from "react";
import './index.css'
const BarSmallSvg = require('../../../../static/img/home/bar-small.svg').default
const DaoGuild = require('../../../../static/img/home/daoguild.png').default

export default function Block2(){
  return (
    <div className="home-block2">
      <div className="home-block2-l">
        <BarSmallSvg/>
        <h1>DAO & Guild</h1>
        <p>Native support for guild to setup dao management system with voting, trade and treasure book keepers.  </p>
      </div>
      <div className="home-block2-r">
        <img src={DaoGuild} alt=""/>
      </div>
    </div>
  )
}
