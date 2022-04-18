import React from "react";
import cs from "./GetApp.module.css";
import scrollIds from "../../utils/scrolIds";
import Animate from "react-animate-on-scroll";
import AppFeature from "../AppFeatures/AppFeature/AppFeature";
import Button from "../../components/Button/Button";
import ctImg1 from '../../assets/images/cta/cta-image-1.svg'
import ctImg2 from '../../assets/images/cta/cta-image-2.svg'

const GetApp = () => {
  return (
    <div id={scrollIds.GetApp}>
       <Animate
      animateIn='btt'
      duration={0.8}
      animateOnce
      offset={10}
      className={[cs.GetApp, 'd_padding'].join(' ')}>
      <div className={[cs.GetAppC, 'card'].join(' ')}>
        <AppFeature
          title="free delivery"
          heading="Get gadgets delivered nationwide"
          description="Weve got you covered no mater where you are in the country, all you need is our app, an internet connection and your order"
          alternate
          linkText="Know More About App"
          content_pad="4rem 0"
          pt
          colr
          element={(<div className={cs.download}>
            <Button>Play Store</Button>
            <Button>Apple store</Button>
          </div>)}
          imageElement={(<div className={cs.getAppImages}>
            <img src={ctImg1} alt='img1'/>
            <img src={ctImg2} alt='img2'/>
          </div>)}
          alignBtm
        />
      </div>
    </Animate>

    </div>
     );
};

export default GetApp;
