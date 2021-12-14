import React from "react";
import './index.css'
const BarSmallSvg = require('../../../../static/img/home/bar-small-green.svg').default
const Custody = require('../../../../static/img/home/custody.png').default

export default function Block4(){
  return (
    <div className="home-block4">
      <div className="home-block4-box">
        <div className="home-block4-l">
          <BarSmallSvg/>
          <h1>Custody & lease to earn </h1>
          <p>Innonative design to allow nft owner to lease props to players and earn lucrutive return. </p>
        </div>
        <div className="home-block4-r">
          <img src={Custody} alt=""/>
        </div>
      </div>
    </div>
  )
}
