import React, {useMemo, useState} from "react";
import './index.css'
const Logo = require('../../../../static/img/logo.svg').default

export default function Header(){
  const [scrollTop, setScrollTop] = useState(0)
  const handleScroll = (event) => {
    const scrollTop_ = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
      || window.pageYOffset
      || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    if (scrollTop_ === 0){
      setScrollTop(0)
    } else if (scrollTop === 0 && scrollTop_ > 0){
      setScrollTop(1)
    }
  }
  useMemo(()=>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <div className={'header ' + (scrollTop > 0 ? 'header-w' : 'header-t')}>
      <Logo className="logo" alt=""/>
      <div className="logo-txt">
        <p>FAIR</p>
        <p>PROTOCOL</p>
      </div>
    </div>
  )
}

