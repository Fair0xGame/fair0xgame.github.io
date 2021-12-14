import React from "react";
import './index.css'
const list = [
  {
    Svg: require('../../../../static/img/home/avatar1.svg').default,
    title: 'Naming, identity & avatars',
    desc: 'Incarnation of an human in the game with different characteristics not limited to appearances, language, social status and species.'
  },
  {
    Svg: require('../../../../static/img/home/avatar2.svg').default,
    title: 'Unlock parallel processing',
    desc: 'Highly scalable architecture supports fast transaction speed and large workloads by separating execution from consensus. the network handles over 9,000 transactions per second, a 600x improvement over native limits.'
  },
  {
    Svg: require('../../../../static/img/home/avatar3.svg').default,
    title: 'Native built for NFT economy',
    desc: 'Interopration API for NFT management with zero gas fee which allows game designer to freely mint, transfer, split and rent.'
  },
  {
    Svg: require('../../../../static/img/home/avatar4.svg').default,
    title: 'PoS chain',
    desc: 'EVM-compatible ethereum sidechain, secured by a permissionless set of PoS validators and checkpoints submitted to Ethereum'
  },
  {
    Svg: require('../../../../static/img/home/avatar5.svg').default,
    title: 'Interconnected computing power for the immersion ',
    desc: 'Deliver the affordable and low latency computing power to game play function and experience by connecting with decentrazlied computing resrouces'
  },
]
export default function Block1(){
  return (
    <div className="home-block1">
      <div className="home-block1-box">
        {
          list.map((item, index) => (
            <div className="home-block1-item" key={index}>
              <item.Svg className="home-block1-item-svg"/>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
