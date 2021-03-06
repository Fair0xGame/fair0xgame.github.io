import React, {useMemo, useState} from "react";
import './index.css'
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function Header(){
  const [scrollTop, setScrollTop] = useState(0)
  const isBrowser = useIsBrowser();
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
    if (isBrowser){
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isBrowser])
  const Logo = useBaseUrl('/img/logo-large.svg');
  return (
      <div className={'header ' + (scrollTop > 0 ? 'header-w' : 'header-t')}>
        <div className="header-box">
          <img src={Logo} className="logo" alt=""/>
        </div>
      </div>
  )
}

