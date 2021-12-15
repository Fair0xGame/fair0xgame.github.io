import React from 'react';
import style from './index.module.css'
const BG = require('../../static/img/home/glow.png').default
import Banner from "../components/home/banner";
import Header from "../components/home/header";
import Block1 from "../components/home/block1";
import Block2 from "../components/home/block2";
import Block3 from "../components/home/block3";
import Block4 from "../components/home/block4";
import Footer from "../components/home/footer";
export default function Home() {
  return (
    <div className={style.homePage}>
      <img src={BG} className={style.homeBG} alt=""/>
      <Header/>
      <Banner/>
      <Block1/>
      <Block2/>
      <Block3/>
      <Block4/>
      <Footer/>
    </div>
  );
}
