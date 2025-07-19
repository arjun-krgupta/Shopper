
import slide1 from '../Assets/Slider/mobile-banner.png'
import slide2 from '../Assets/Slider/laptop banner.png'
import slide3 from '../Assets/Slider/man banner.png'
import slide4 from '../Assets/Slider/woman banner.png'

function Slider() {
  return (
   <>
    <div id="carouselExampleIndicators" className="carousel slide mt-1" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide1}
              className="img-fluid max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide2}
              className="img-fluid max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide3}
              className="img-fluid max-w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide4}
              className="img-fluid max-w-100 h-auto "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
   
   </>
  );
}

export default Slider;