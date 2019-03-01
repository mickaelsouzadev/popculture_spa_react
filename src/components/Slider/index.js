import React from 'react';

const Slider = () => (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
    <ol className="carousel-indicators">
     <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
     <li data-target="#carouselExampleControls" data-slide-to="1"></li>
     <li data-target="#carouselExampleControls" data-slide-to="2"></li>
      <li data-target="#carouselExampleControls" data-slide-to="3"></li>
      <li data-target="#carouselExampleControls" data-slide-to="4"></li>
      <li data-target="#carouselExampleControls" data-slide-to="5"></li>
      <li data-target="#carouselExampleControls" data-slide-to="6"></li>
   </ol>
   <div className="carousel-inner" role="listbox">
  
 <div className="carousel-item active">
    <div className="img">
         
     <header className="masthead text-center text-white " id="news">
       <div className="masthead-content">
         <div className="container">
           <h1 className="masthead-heading mb-0">Notícias</h1>
         
           <a href="#news" className="btn btn-primary btn-xl rounded-pill mt-5 person-btn-1">Abrir</a>
         </div>
       </div>
      
     </header>
   </div>
 </div>
 <div className="carousel-item">
       <div className="img">
 
     <header className="masthead text-center text-white " id="cinema">
       <div className="masthead-content">
         <div className="container">
           <h1 className="masthead-heading mb-0">Cinema</h1>
          
           <a href="#cinema" className="btn btn-primary btn-xl rounded-pill mt-5 person-btn-1">Abrir</a>
         </div>
       </div>
      
     </header>
   </div>
 </div>
  <div className="carousel-item">
    <div className="img">
         
     <header className="masthead text-center text-white " id="tv">
       <div className="masthead-content">
         <div className="container">
           <h1 className="masthead-heading mb-0">TV</h1>
          
           <a href="#tv" className="btn btn-primary btn-xl rounded-pill mt-5 person-btn-1">Abrir</a>
         </div>
       </div>
      
     </header>
   </div>
 </div>
 
  <div className="carousel-item">
    <div className="img">
         
     <header className="masthead text-center text-white " id="games">
       <div className="masthead-content">
         <div className="container">
           <h1 className="masthead-heading mb-0">Games</h1>
          
           <a href="#games" className="btn btn-primary btn-xl rounded-pill mt-5 person-btn-1">Abrir</a>
         </div>
       </div>
      
     </header>
   </div>
 </div>
 <div className="carousel-item">
    <div className="img">
         
     <header className="masthead text-center text-white " id="hqs">
       <div className="masthead-content">
         <div className="container">
           <h1 className="masthead-heading mb-0">Quadrinhos</h1>
          
           <a href="#quadrinhos" className="btn btn-primary btn-xl rounded-pill mt-5 person-btn-1">Abrir</a>
         </div>
       </div>
      
     </header>
   </div>
 </div>
 <div className="carousel-item">
    <div className="img">
         
     <header className="masthead text-center text-white " id="music">
       <div className="masthead-content">
         <div className="container">
           <h1 className="masthead-heading mb-0">Música</h1>
          
           <a href="#musica" className="btn btn-primary btn-xl rounded-pill mt-5 person-btn-1">Abrir</a>
         </div>
       </div>
      
     </header>
   </div>
 </div>
 <div className="carousel-item">
    <div className="img">
         
     <header className="masthead text-center text-white " id="videos">
       <div className="masthead-content">
         <div className="container">
           <h1 className="masthead-heading mb-0">Videos</h1>
          
           <a href="#videos" className="btn btn-primary btn-xl rounded-pill mt-5 person-btn-1">Abrir</a>
         </div>
       </div>
      
     </header>
   </div>
 </div>
   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="sr-only">Previous</span>
   </a>
   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="sr-only">Next</span>
   </a>
 
 </div>
 </div>
);

export default Slider;