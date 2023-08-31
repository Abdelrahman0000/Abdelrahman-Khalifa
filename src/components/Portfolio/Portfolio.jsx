import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


import Ecommerce1 from "../../img/p1.PNG";
import Ecommerce from "../../img/p2.PNG";
import Crm from '../../img/crm.PNG'
import NftMarket from '../../img/nft-market.PNG'
import Port from '../../img/port.PNG'
import Nft from "../../img/Capture001.PNG";
import Color from "../../img/p3.PNG";
import Dashboard from "../../img/p4.PNG";
import Trav from "../../img/p5.PNG";
import Instgrame from "../../img/p6.PNG";
import Netf from "../../img/p7.PNG";
import Phot from "../../img/p8.PNG";
import Youtube from '../../img/youtube.PNG'
import Mov from "../../img/p9.PNG";
import Ch from "../../img/ch.PNG"
import Cv from "../../img/p10.PNG";
import Cour from "../../img/p11.PNG";
import { themeContext } from "../../Context";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Globe from "@iconscout/react-unicons/icons/uil-globe";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const swiperVersion = Swiper.version;

console.log(`Swiper version: ${swiperVersion}`);
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
