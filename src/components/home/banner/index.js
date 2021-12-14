import React from "react";
import './index.css'
const twitterImg = require('../../../../static/img/home/twitter.png').default
const discordImg = require('../../../../static/img/home/discord.png').default
const ArrowSvg = require('../../../../static/img/home/arrow.svg').default

export default function Banner(){
  return (
    <div className="home-banner">
      <div className="home-banner-view">
        <div className="home-banner-news">
          <div className="home-banner-news-flex">
            <div>
              <span>News & Update</span>
              <span>FIP01 Fully endorsed by the round table to initiate ethereum sidechain upgrade plan.</span>
            </div>
            <ArrowSvg className="home-banner-news-arrow"/>
          </div>
        </div>
        <h1 className="home-banner-title">
          The first metaverse <span>game engine</span> sidechain built on ethereum.
        </h1>
        <div className="home-banner-link">
          <div>
            <img src={twitterImg} alt=""/>
            Twitter
          </div>
          <div>
            <img src={discordImg} alt=""/>
            Discord
          </div>
        </div>
      </div>
    </div>
  )
}

