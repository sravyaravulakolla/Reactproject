import React from 'react';
// import './styles.css';
// import  "./Slide1.jpg";
function Home(){
return <div id="carousel" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img id="img" className="car-img " src="Slide1.jpg" alt="Slide1"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="car-head3"></h5>
        <p className="car-para1">Digitalised records of your vehicles</p>
      </div>
    </div>
    <div className="carousel-item">
      <img id="img" className="car-img " src="Slide2.jpg"  alt="Slide2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="car-head3">Apply for license</h5>
        <p className="car-para2"></p>
      </div>
    </div>
    <div className="carousel-item">
            <img id="img" className="car-img " src="Slide3.png" alt="Slide3"/>
        <div className="carousel-caption d-none d-md-block mt-5">
          <h5 className="car-head3 ">The one stop transportation service</h5>
          <p className="car-para3"></p>
        </div>
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
}
export default Home;