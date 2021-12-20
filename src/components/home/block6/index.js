import React from "react";
import './index.css'
const OKEX = require('../../../../static/img/home/okex.svg').default
const Huobi = require('../../../../static/img/home/huobi.svg').default
const Uniswap = require('../../../../static/img/home/uniswap.svg').default
const Arrow = require('../../../../static/img/home/arrow-blue2.svg').default

export default function Block6(){
  return (
    <div className="home-block6 ">
      <div className="home-block6-box">
        <div className="home-block6-l">
          <h1>Exchange Listing</h1>
          <p>Fair Token is available on the top CEX.  The token is used to secure the network via staking and being the payment of transaction fees.</p>
          <p>Holding the token proves the active invovement in the  ecosystem hence is eligible for the ido, airdrop and genesis onboarding of new games.</p>
        </div>
        <div className="home-block6-r">
          <a href="https://www.okex.com/trade-spot/fair-usdt" target="_blank" className="home-block6-r-item">
            <Arrow className="home-block6-r-arrow"/>
            <div><OKEX className="home-block6-r-item-logo"/></div>
            <p>OKEx</p>
          </a>
          <a href="https://www.huobi.com/en-us/exchange/fair_eth" target="_blank" className="home-block6-r-item">
            <Arrow className="home-block6-r-arrow"/>
            <div><Huobi className="home-block6-r-item-logo"/></div>
            <p>Huobi</p>
          </a>
          <div className="home-block6-r-item">
            <span className="home-block6-r-coming">Coming Soon</span>
            <div><Uniswap className="home-block6-r-item-logo"/></div>
            <p>Uniswap</p>
          </div>
          <div className="home-block6-r-item home-block6-r-item-empty">
            <div></div>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  )
}
