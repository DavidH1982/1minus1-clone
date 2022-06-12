import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const getHeight = () => 
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const [height, setHeight] = useState(getHeight());
  const [scrollY, setScrollY] = useState();

  const allElements = [];
  allElements.push(window);
  const onLoad = () => {
    window.addEventListener("load", function () {
      let screenHeight = allElements[0].screen.height;
      setHeight(screenHeight);
    });
  };
  const resizeScreen = () => {
    window.addEventListener("resize", function () {
      let screenHeight = allElements[0].screen.height;
      setHeight(screenHeight);
    });
  };
  const onScroll = () => {
    window.addEventListener("scroll", function () {
      let scrollY = allElements[0].scrollY
      setScrollY(scrollY)
      console.log(scrollY)
    })
  }

  useEffect(() => {
    onLoad();
  });
  useEffect(() => {
    resizeScreen();
  });
  useEffect(() => {
    onScroll();
  });

  const [ sponsorFade, setSponsorFade ] = useState(false)
  const sponsorDivFade = () => {
    scrollY >= height/2 ? setSponsorFade(true): setSponsorFade(false);
  }
  useEffect(() => {
    sponsorDivFade();
  });

  const [ controllerBGFade, setControllerBGFade ] = useState(false)
  const controllerFade = () => {
    scrollY >= 3400 ? setControllerBGFade(true): setControllerBGFade(false);
  }
  useEffect(() => {
    controllerFade();
  });

  const pageHeight = height + 45;
  const whatWeDoHeight = height -45;
  const resultsHeight = height +200;
  const featuredHeight = height - 100;
  const caseStudyHeight = height*3.4;
  const footerHeight = height*1.6;


  // let fullPage = document.querySelector('App')

  return (
    <>
      <div className="App">
        <div className='jumboContainer' style={{height:`${pageHeight}`+'px'}}>
          <div className='jumboText col9'>
            Don't just do. <br/>
            <strong>Achieve.</strong>
            <p>CREATIVE MARKETING STUDIO FOR VIDEO GAMES</p>
          </div>
        </div>
        <div className='sponsors col12' style={{height:`${pageHeight}`+'px'}}>
          <li className='sponsorsLogo blankLogo'></li>
          <li className={sponsorFade ? 'sponsorsLogo xboxLogo ' : 'sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo vrLogo ' : 'sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo turn10Logo ' : 'sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo fastTravelLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className='sponsorsLogo blankLogo'></li>
          <li className='sponsorsLogo blankLogo'></li>
          <li className={sponsorFade ? 'sponsorsLogo thatGameLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo playgroundLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo ballisticLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo studioTypesLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className='sponsorsLogo blankLogo'></li>
          <li className='sponsorsLogo blankLogo'></li>
          <li className={sponsorFade ? 'sponsorsLogo airshipLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo lightspeedLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo kochLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className={sponsorFade ? 'sponsorsLogo tezotopiaLogo ' : ' sponsorsLogo fadeOut'}></li>
          <li className='sponsorsLogo blankLogo'></li>
        </div>
        <div className='whatWeDoPage' style={{height:`${whatWeDoHeight}`+'px'}}>
          <div className='wwdDiv col9'>
            <div className='wwdHeading'>
              <strong>WHAT WE DO</strong>
            </div>
            <div className='wwdDesc col9'>
              1minus1 is an award-winning <strong>creative <br/>marketing agency</strong> dedicated to the <br/>games industry.
            </div>
            <div className='wwdBreakdown'>
              <div className='websitesBreakdown'>
                <li>Websites</li>
                <li>Game Studio Websites</li>
                <li>Video Game Websites</li>
                <li>Web Experieces</li>
              </div>
              <div className='designsBreakdown'>
                <li>Design</li>
                <li>Brand identity</li>
                <li>Web design</li>
                <li>Campaign design</li>
              </div>
              <div className='graphicsBreakdown'>
                <li>Motion graphics</li>
                <li>Video</li>
                <li>3D</li>
                <li>Animation</li>
              </div>
              <div className='marketingBreakdown'>
                <li>Marketing</li>
                <li>Video Game Campaigns</li>
                <li>Campaign strategy</li>
                <li>Influencer marketing</li>
              </div>
            </div>
          </div>
        </div>
        <div className='resultsPage col12' style={{height:`${resultsHeight}`+'px'}}>
          <div className={scrollY>height*2 ? 'resultsDiv col12 resultsDivAnimation' : 'resultsDiv col12'}>
            <div className='resultsText col9'>
              <div className='resultsTextLeft col7'>
                <div className='resultsTextLeftTop'>
                  Results are everything. <br/>
                  It's that <strong>simple.</strong>
                </div>
                <div className='resultsTextLeftMiddle'>
                  From award-winning websites to complex web <br/>
                  experiences, we've done it all. We've helped Games <br/>
                  Studios to use the web to hire, acquire players, and access <br/>
                  new markets.
                </div>
                <div className='resultsTextLeftBottom'>
                  <a href='#'>VIEW SERVICES</a>
                </div>
              </div>
              <div className='resultsTextRight col5'>
                <div className='resultsTextRightTop'>
                  40%
                </div>
                <div className='resultsTextRightBottom'>
                  Increase in prospective <br/>
                  employee engagement.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='specialistPage col12' style={{height:`${resultsHeight}`+'px'}}>
          <div className={controllerBGFade ? 'controllerBG controllerBGAnimation' : 'controllerBG controllerBGHidden'}/>
          <div className={controllerBGFade ? 'controllerImage controllerImageAnimation' : 'controllerImage controllerImageHidden'}/>
        </div>
        <div className='featuredProjectsPage col12' style={{height:`${featuredHeight}`+'px'}}>
          <div className='featuredProjectDiv'>
            <div className='featuredProjectVideoDiv'>
              <video width='100%' height='100%' autoPlay loop>
                <source src='./Images/featuredprojectvideo.mp4' type='video/mp4'/>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className=' featuredProjectText'>
              <div className='featuredProjectTextTop'>
                <strong>FEATURED PROJECT - TURN 10</strong>
              </div>
              <div className='featuredProjectTextMiddle featuredProjectText'>
                Creative design, 3D <br/>
                animation &amp; modern CMS
              </div>
              <div className='featuredProjectTextBottom featuredProjectText'>
                <a href='#'><strong>VIEW PROJECTS</strong></a>
              </div>
            </div>
          </div>
        </div>
        <div className='caseStudyPage' style={{height:`${caseStudyHeight}`+'px'}}>
          <div className='sideBar'>
          </div>
            <div className='caseStudyText col7'>
              <div className='caseStudyTextTop'>
                <strong>VIDEO GAMES INDUSTRY CASE STUDIES.</strong>
              </div>
              <div className='caseStudyTextBottom'>
                Creative marketing for the <br/>
                Video Games Industry.
              </div>
            </div>
            <div className='turn10CaseDiv col4'>
              <div className='turn10BG'>
                <div className='turn10CaseImage'/>
              </div>
              <div className='turn10CaseTextTop'>
                <strong>TURN 10</strong>
              </div>
              <div className='turn10CaseTextBottom'>
                Highly creative, animated <br/>
                website with 3D animation
              </div>
            </div>
            <div className='ballisticCaseDiv col4'>
              <div className='ballisticBG'>
                <div className='ballisticCaseImage'/>
              </div>
              <div className='ballisticCaseTextTop'>
                <strong>BALLISTIC MOON</strong>
              </div>
              <div className='ballisticCaseTextBottom'>
                Illustrated, narrative-led site with <br/>
                great use of sound
              </div>
            </div>
            <div className='fastTravelCaseDiv col4'>
              <div className='fastTravelBG'>
                <div className='fastTravelCaseImage'/>
              </div>
              <div className='fastTravelCaseTextTop'>
                <strong>FAST TRAVEL GAMES</strong>
              </div>
              <div className='fastTravelCaseTextBottom'>
                Fun 3D &amp; Three.js animated <br/>
                website with Headless CMS
              </div>
            </div>
            <div className='studiotypesCaseDiv col4'>
              <div className='studiotypesBG'>
                <div className='studiotypesCaseImage'/>
              </div>
              <div className='studiotypesCaseTextTop'>
                <strong>STUDIOTYPES</strong>
              </div>
              <div className='studiotypesCaseTextBottom'>
                3D animation led webstie with <br/>
                complex Blender models
              </div>
            </div>
        </div>
        <div className='playgroundBannerPage col12' style={{height:`${height}`+'px'}}>
          <div className='playgroundBG'>
              <div className='playgroundBGImage'/>
              <div className='playgroundText'>
                <div className='playgroundTextTop'>
                  <strong>Playground<br/>
                  Games</strong>
                </div>
                <div className='playgroundTextBottom'>
                  Scalable content managed<br/>
                  website for the Microsoft games different<br/>
                  studio. <a href='#'>View projects</a>
                </div>
              </div>
          </div>
        </div>
        <div className='footer' style={{height:`${footerHeight}`+'px'}}>
          <div className='footerTopText'>
            <div className='footerTopTextTop'>
              <li>Di&#102;&#102;erent where it</li>
              <li>matters. Fanatical</li>
              <li>where it counts.</li>
            </div>
            <div className='footerTopTextBottom'>
              <a href='#'>CONTACT US</a>
            </div>
          </div>
          <div className='footerBottomText'>
            <div className='addressLeft'>
              <div className='addressLeftName'>
                The Farm
              </div>
              <div className='addressLeftPhone'>
                +44 &#40;0&#41;1252 413 954
              </div>
              <div className='addressLeftEmail'>
                hq&#64;1minus1.com
              </div>
              <div className='addressLeftAddressTop'>
                Creative Studio, Runfold St George,
              </div>
              <div className='addressLeftAddressBottom'>
                Farnham, Surrey, GU10 1PL
              </div>
            </div>
            <div className='addressRight'>
              <div className='addressRightName'>
                The City Block
              </div>
              <div className='addressRightPhone'>
                +44 &#40;0&#41;20 3489 7673
              </div>
              <div className='addressRightEmail'>
                city&#64;1minus1.com
              </div>
              <div className='addressRightAddressTop'>
                3rd floor, 86 - 90 Paul St,
              </div>
              <div className='addressRightAddressBottom'>
                Hackney, London, EC2A 4NE
              </div>
            </div>
            <div className='copyright'>
              &copy; 2022 1minus1 Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
