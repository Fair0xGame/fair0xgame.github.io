import React from "react";
import './index.css'
const Marketplace = require('../../../../static/img/home/marketplace.png').default
const MarketplaceClip = require('../../../../static/img/home/marketplace-clip.png').default
const BarSmall = require('../../../../static/img/home/bar-small-white.svg').default

export default function Block3(){
  return (
    <div className="home-block3">
      <div className="home-block3-box">
        <div className="home-block3-l">
          <img src={Marketplace} alt=""/>
          <img src={MarketplaceClip} alt=""/>
        </div>
        <div className="home-block3-r">
          <BarSmall/>
          <h1>Marketplace</h1>
          <p>A solution for game designer and player to mint, trade NFT props.</p>
        </div>
      </div>
    </div>
  )
}
