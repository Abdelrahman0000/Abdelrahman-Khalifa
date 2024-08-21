import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


import MOST from "../../img/MOST.webp";
import Ecommerce1 from "../../img/p1.webp";
import Ecommerce from "../../img/p2.webp";
import Crm from '../../img/crm.webp'
import NftMarket from '../../img/nft-market.webp'
import Port from '../../img/port.webp'
import Waqah from '../../img/waqah.webp'
import BlueDana from '../../img/blueDana.webp'
import Liwan from '../../img/liwan.webp'

import HHouse from '../../img/h-house.webp'
import Nft from "../../img/Capture001.webp";
import Color from "../../img/p3.webp";
import Dashboard from "../../img/p4.webp";
import Trav from "../../img/p5.webp";
import Instgrame from "../../img/p6.webp";
import Netf from "../../img/p7.webp";
import Phot from "../../img/p8.webp";
import Youtube from '../../img/youtube.webp'
import Mov from "../../img/p9.webp";
import Ch from "../../img/ch.webp"
import Cv from "../../img/p10.webp";
import Cour from "../../img/p11.webp";
import { themeContext } from "../../Context";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Globe from "@iconscout/react-unicons/icons/uil-globe";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
     
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, Pagination]}
        className="portfolio-slider"
      >



  <SwiperSlide>
       
          <img src={Liwan} alt="" />


<div className="box-inner">
                <div className="my-row">
              

                <a href="https://liwan.sa/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>

  <SwiperSlide>
       
          <img src={BlueDana} alt="" />


<div className="box-inner">
                <div className="my-row">
              

                <a href="https://bluedana.com/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
       
          <img src={Waqah} alt="" />


<div className="box-inner">
                <div className="my-row">
              

                <a href="https://waqah.net/en" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>



<SwiperSlide>
      
          <img src={NftMarket} alt="" />




          <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/nft-market">
                       <Gitub /> Code
                </a>

          <a href="https://nft-market-five-xi.vercel.app/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>


        </SwiperSlide>


    <SwiperSlide>
       
          <img src={MOST} alt="" />


<div className="box-inner">
                <div className="my-row">
              

                <a href="https://mostforconstruction.com/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>

  <SwiperSlide>
       
          <img src={HHouse} alt="" />


<div className="box-inner">
                <div className="my-row">
              

                <a href="https://www.hhouse.com.sy/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>


<SwiperSlide>
       
          <img src={Ch} alt="" />


<div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Ecommerc-heceto">
                       <Gitub /> Code
                </a>

          <a href="https://ecommerc-heceto.vercel.app/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
       
          <img src={Youtube} alt="" />


<div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Youtube-clone">
                       <Gitub /> Code
                </a>

                <a href="https://youtube-clone-three-lyart.vercel.app/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
       
          <img src={Ecommerce1} alt="" />

          <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Ecommeerc">
                       <Gitub /> Code
                </a>

                <a href="https://ecommeerc.vercel.app/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
       
        <img src={Crm} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Crm-react-project">
                       <Gitub /> Code
                </a>

                <a href="https://crm-react-project.vercel.app/">
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <img src={Nft} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Nft-LandingPage">
                       <Gitub /> Code
                </a>

                <a href="https://nft-landing-page-gold.vercel.app/">
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
       
        <img src={Port} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Portfolio-pure-js">
                       <Gitub /> Code
                </a>

                <a href="https://portfolio-pure-js.vercel.app/">
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
       
        <img src={Color} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/color-generator">
                       <Gitub /> Code
                </a>

                <a href="https://color-generator-three-xi.vercel.app/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
{/* 
        <SwiperSlide>
        <a href="https://practical-snyder-dd8a58.netlify.app/" >
        <img src={Ecommerce} alt="" />
</a>
        </SwiperSlide> */}


        <SwiperSlide>
        
        <img src={Dashboard} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/dashboard">
                       <Gitub /> Code
                </a>

                <a href="https://dashboard-theta-jet.vercel.app/">
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        
        <img src={Trav} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Jado-LandingPage">
                       <Gitub /> Code
                </a>

                <a href="https://jado-landing-page.vercel.app/">
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
       
        <img src={Instgrame} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/instegram-clone">
                       <Gitub /> Code
                </a>

                <a href="https://instgrame.netlify.app/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <img src={Netf} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Nitflix">
                       <Gitub /> Code
                </a>

                <a href="https://youthful-heisenberg-1b6a3a.netlify.app/" >
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
               <img src={Phot} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/Photo-Store">
                       <Gitub /> Code
                </a>

                <a href="https://lighthearted-chebakia-e4bb8e.netlify.app/" class="portfolio-item padd-15">

                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
         
        <img src={Mov} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/khalifa-portfolio">
                       <Gitub /> Code
                </a>

                <a href="https://kaleidoscopic-twilight-165f13.netlify.app/" class="portfolio-item padd-15">
  
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
       
        <img src={Cv} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/cv-clone">
                       <Gitub /> Code
                </a>

                <a href="https://rococo-swan-3be39c.netlify.app/" class="portfolio-item padd-15">
  
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
      
  
        <img src={Cour} alt="" />
        <div className="box-inner">
                <div className="my-row">
                <a href="https://github.com/Abdelrahman0000/CoursesWeb">
                       <Gitub /> Code
                </a>

                <a href="https://beamish-yeot-407126.netlify.app/" class="portfolio-item padd-15">
                  <Globe /> Demo
                </a>
                </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Portfolio;
