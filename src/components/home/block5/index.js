import React from "react";
import './index.css'
const Alliance = require('../../../../static/img/home/alliance-glink.png').default
const ArrowSvg = require('../../../../static/img/home/arrow-blue.svg').default

export default function Block5(){
  return (
    <div className="home-block5">
      <div className="home-block5-title">
        <h1>Alliance & Incubation</h1>
        <p>Jointly affiliated with Glink to foster the next generation game play.</p>
        <div>
          <a href="/pdf/PPT-compressed.pdf" target="_blank">Read More</a>
          <ArrowSvg/>
        </div>
      </div>
      <div className="home-block5-box">
        <div className="home-block5-l">
          <img src={Alliance} alt=""/>
        </div>
        <div className="home-block5-r">
          <p>G-LINK is a gamefi incubator based in singapore. It aims to accelarate tradition game development studio to embrace blockchain gaming to provide a fully community owned, open and immersive game play experience. It helps from strategy and game design to development and launch support.</p>
          <p>Fair protocol provides the full stack of technology support from nft, wallet, ecosystem and onchain toolsets.</p>
        </div>
      </div>
    </div>
  )
}
