import React, { PropsWithChildren } from 'react'
import {Outlet} from "react-router-dom";
import HomeHeader from './HT_Header';
import HomeCarousel from './HT_Carousel';
import HomeFooter from './HT_Footer';

function HomeTemplate(props: PropsWithChildren) {
  return (
    <div>
        <HomeHeader/>
        <HomeCarousel/>
        {/* {props.children} */}
        <Outlet/>
        <HomeFooter/>
    </div>
  )
}

export default HomeTemplate