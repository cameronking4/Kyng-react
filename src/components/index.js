import React from 'react';
import $ from 'jquery'

class Home extends React.Component{
	render(){
		return(
      <div>
        <div>
        <main className="main-wrapper oh desktop ">
            <section className="section-wrap nopadding gradient-overlay bg-video">
              <div id="vimeo-bg">
                <iframe src="https://player.vimeo.com/video/304425705?autoplay=0" allowfullscreen></iframe>
              </div>
              <div className="hero-holder">
                <h1>Cameron King</h1>
                <h2>Creative / Developer</h2>
              </div>
            </section>
          </main>
  </div>
  <div>
          <main className="main-wrapper oh mobile">
            <section className="section-wrap nopadding gradient-overlay pl-80">
              <div className="hero-holder">
                <h1>Cameron King</h1>
                <h2>Creative / Developer</h2>
              </div>

              <div id="flexslider-hero" className="flexslider fullscreen-img">
                <ul className="slides container-full-height">
                  <li>
                    <img src={require("../img/portfolio/hero_1.jpg")} alt=""/>
                    <div className="img-holder" style={{backgroundImage:require("../img/portfolio/hero_1.jpg")}}></div>
                  </li>
                  <li>
                    <img src={require("../img/portfolio/hero_2.jpg")} alt=""/>
                    <div className="img-holder" style={{backgroundImage:require("../img/portfolio/hero_2.jpg")}}></div>
                  </li>
                  <li>
                    <img src={require("../img/portfolio/hero_3.jpg")} alt=""/>
                    <div className="img-holder" style={{backgroundImage:require("../img/portfolio/hero_3.jpg")}}></div>
                  </li>
                </ul>
              </div>
            </section>
          </main>
</div>
</div>
		);
	}
}
export default Home;
