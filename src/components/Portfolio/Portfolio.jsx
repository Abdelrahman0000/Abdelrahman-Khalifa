import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Ecommerce1 from "../../img/p1.PNG";
import Ecommerce from "../../img/p2.PNG";
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
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >

<SwiperSlide>
        <a href="https://incredible-tartufo-e1ddc1.netlify.app/" >
          <img src={Ch} alt="" />
</a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://harmonious-salmiakki-48b50e.netlify.app/" >
          <img src={Youtube} alt="" />
</a>
        </SwiperSlide>


        <SwiperSlide>
        <a href="https://competent-leavitt-d84f6e.netlify.app/" >
          <img src={Ecommerce1} alt="" />
</a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://luminous-cat-d3d661.netlify.app/">
        <img src={Nft} alt="" />
</a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://sage-semolina-579d98.netlify.app/" >
        <img src={Color} alt="" />
</a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://practical-snyder-dd8a58.netlify.app/" >
        <img src={Ecommerce} alt="" />
</a>
        </SwiperSlide>


        <SwiperSlide>
        <a href="https://bejewelled-pika-c270bb.netlify.app/">
        <img src={Dashboard} alt="" />
</a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://epic-swanson-5ea3da.netlify.app/">
        <img src={Trav} alt="" />
</a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://instgrame.netlify.app/" >
        <img src={Instgrame} alt="" />
</a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://youthful-heisenberg-1b6a3a.netlify.app/" >
        <img src={Netf} alt="" />
</a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://lighthearted-chebakia-e4bb8e.netlify.app/" class="portfolio-item padd-15">
        <img src={Phot} alt="" />
</a>
        </SwiperSlide>


        <SwiperSlide>
        <a href="https://kaleidoscopic-twilight-165f13.netlify.app/" class="portfolio-item padd-15">
    
        <img src={Mov} alt="" />
</a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://rococo-swan-3be39c.netlify.app/" class="portfolio-item padd-15">
  
        <img src={Cv} alt="" />
</a>
        </SwiperSlide>
        <SwiperSlide>
      
    <a href="https://beamish-yeot-407126.netlify.app/" class="portfolio-item padd-15">
        <img src={Cour} alt="" />
</a>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Portfolio;
