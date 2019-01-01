import React from 'react';
import logo from'../img/logo_dark.png';


class Header extends React.Component{
	render(){
		return(

  <header className="nav-type-1">
    <nav className="navbar">
      <div className="header-wrap relative">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>


          <div className="logo-container">
            <div className="logo-wrap">
              <a href="index.html">
                <img width="250%" src={logo} alt="logo"/>
              </a>
            </div>
          </div>
        </div>

        <div className="nav-wrap">
          <div className="collapse navbar-collapse" id="navbar-collapse">

            <ul className="nav navbar-nav">
              <li className="nav-item active"> <a href="index.html">Home</a></li>
              <li><a href="about.html">About Me</a></li>
              <li className="nav-item-toggle"><a href="#">Portfolio</a>
                <ul className="nav-item-submenu">
				          <li><a href="graphic.html">Graphic Design</a></li>
                  <li><a href="photo.html">Photography</a></li>
				          <li><a href="https://16cameronk.github.io/web/">Code</a></li>
                </ul>
              </li>
              <li className="nav-item"><a href="http://vimeo.com/cameronkyng">Vlog</a></li>
			        <li className="nav-item"><a href="http://fadr.xyz">Startup</a></li>
              <li><a href="contact.html">Contact</a></li>

              <li>
                <div className="social-icons on-mobile nobase dark clearfix hidden-lg hidden-md">
                  <a href="http://instagram.com/cameronkyng"><i className="ui-instagram"></i></a>
				          <a href="http://linkedin.com/in/cameronyking"><i className="ui-linkedin"></i></a>
                  <a href="http://vimeo.com/cameronkyng"><i className="ui-vimeo"></i></a>
                  <a href="http://github.com/cameronking4"><i className="ui-github-circled"></i></a>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div className="social-icons nobase dark clearfix hidden-sm hidden-xs">
      	  <a href="http://instagram.com/cameronkyng"><i className="ui-instagram"></i></a>
		      <a href="http://linkedin.com/in/cameronyking"><i className="ui-linkedin"></i></a>
		      <a href="http://vimeo.com/cameronkyng"><i className="ui-vimeo"></i></a>
		      <a href="http://github.com/cameronking4"><i className="ui-github-circled"></i></a>
        </div>
      </div>


      <div id="nav-trigger">
        <div id="nav-icon">
          <div className="nav-icon-inner">
            <div id="nav-icon-trigger" className="nav-icon-trigger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

    </nav>
  </header>

		);
	}
}
export default Header;
