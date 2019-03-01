import React from 'react';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><span id="pop">PopCulture</span><span id="bra">Bra<span id="sil">sil</span></span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto navbar-left">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">Noticias</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#cinema">Cinema</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tv">TV</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#games">Games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quadrinhos">Quadrinhos</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#musica">Música</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#videos">Videos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contato">Contato</a>
            </li>
             <li className="nav-item search-item">
              <div className="input-group">
                <input className="form-control custom-form" placeholder="Pesquisar" />
                <span className="input-group-append">
                  <div id="search-btn" className="input-group-text"><i className="fa fa-search"></i></div>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
);

export default Header;