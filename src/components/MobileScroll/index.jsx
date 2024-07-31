import React from 'react'
import "./MobileScroll.css"
import ScreenText from './ScreenText'
import WebDevelopmentImg from "../../common/Images/Services/Web Development.png";
import AppDevelopmentImg from "../../common/Images/Services/App Development.png";
import DigitalMarketingImg from "../../common/Images/Services/Digital Marketting.png";
import LogoDesignImg from "../../common/Images/Services/Logo Design.png";

const scrollData = [
  {
    id: 1, // Unique identifier for each item
    heading: "Web Dev",
    description: "Learning and working on developing websites using latest web technologies, for a social cause",
    mobile_img: WebDevelopmentImg,
  },
  {
    id: 2,
    heading: "AI / ML",
    description: "Crafting machine learning models to solve real-world problems and make data-driven decisions.",
    mobile_img: DigitalMarketingImg,
  },
  {
    id: 3,
    heading: "App Dev",
    description: "Developing mobile applications for both Android and iOS platforms using popular frameworks.",
    mobile_img: AppDevelopmentImg,
  },
  {
    id: 4,
    heading: "Blockchain",
    description: "Exploring the world of blockchain and cryptocurrencies to understand the underlying technology and build decentralized applications.",
    mobile_img: LogoDesignImg,
  },
]

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = React.useState(0);
  return (
    <div className='max-width flex mobile-screen'>
      <div className='scroll-full-screen-wrapper'>
        {
          scrollData.map((screen, i) => (
            <div className="scroll-full-screen" key={screen.id}> {/* Use 'id' as the unique key */}
              <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg} />
            </div>
          ))
        }
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
          <div className="mobile-mockup">
            <div className="mobile-mockup-screen">
              <img src={scrollData[currentImg].mobile_img} alt="" className='mobile-screen-img' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default MobileScroll;