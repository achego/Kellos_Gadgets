import React from "react";
import LinkText from "../../components/LinkText/LinkText";
import scrollIds from "../../utils/scrolIds";
import AppFeature from "./AppFeature/AppFeature";
import cs from "./AppFeatures.module.css";
import img1 from '../../assets/images/about/about-image-1.svg';
import img2 from '../../assets/images/about/about-image-2.svg';

const AppFeatures = () => {
  return (
    <div id={scrollIds.AppFeatures} className={[cs.AppFeatures, 'd_padding'].join(' ')}>
      <div className={cs.AppFeaturesC}>
        <AppFeature
          title="About Application"
          heading="Instant Payment Transfer SavesYou Time"
          description="Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule."
          pt
          element={<LinkText text={'Know More About App'}/>}
          imageElement={<img src={img1} alt={cs.alt} />}
        />
        <AppFeature
          title="free delivery"
          heading="Get gadgets delivered nationwide"
          description="Weve got you covered no mater where you are in the country, all you need is our app, an internet connection and your order"
          alternate
          element={<LinkText text={'Know More About App'}/>}
          imageElement={<img src={img2} alt={cs.alt} />}
        />
      </div>
    </div>
  );
};

export default AppFeatures;
