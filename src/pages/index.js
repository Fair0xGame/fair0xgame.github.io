import React from 'react';
import style from './index.module.css'
const BG = require('../../static/img/home/glow.png').default
import Banner from "../components/home/banner";
import Header from "../components/home/header";
import Block1 from "../components/home/block1";
import Block2 from "../components/home/block2";
import Block3 from "../components/home/block3";
import Block4 from "../components/home/block4";
import Block5 from "../components/home/block5";
import Footer from "../components/home/footer";
import Block6 from "../components/home/block6";
import Layout from '@theme/Layout';
export default function Home() {

  return (
    <div className={style.homePage}>
      <div style={{display: "none"}}>
        <Layout><div></div></Layout>
      </div>
      <img src={BG} className={style.homeBG} alt=""/>
      <Header/>
      <Banner/>
      <Block1/>
      <Block2/>
      <Block3/>
      <Block4/>
      <Block5/>
      <Block6/>
      <Footer/>
    </div>
  );
}
