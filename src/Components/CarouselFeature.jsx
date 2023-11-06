import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselFeature = () => {


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="my-20 bg-slate-100 p-1 rounded-md">
      <Slider {...settings}>
      <div className="w-full max-h-[400px]">
        <img className="w-full" src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/07/The-Best-Furniture-Assembly-Services.jpg" alt="" />
      </div>
      <div className="w-full max-h-[400px]">
      <img className="w-full" src="https://ajshire.co.uk/wp-content/uploads/2012/02/comm4.jpg" alt="" />
      </div>
      <div className="w-full max-h-[400px]">
      <img className="w-full object-cover" src="https://slideplayer.com/10597343/36/images/slide_1.jpg" alt="" />
      </div>
      <div className="w-full max-h-[400px]">
      <img className="w-full" src="https://www.pngitem.com/pimgs/m/542-5423784_house-cleaning-png-home-cleaning-service-hd-transparent.png" alt="" />
      </div>
      <div className="w-full max-h-[400px]">
        <img className="w-full" src="https://www.assureshift.in/sites/default/files/images/blog/additional-services-by-moving-companies.jpg" alt="" />
      </div>
      <div className="w-full max-h-[400px]">
        <img className="w-full" src="https://www.utahdirectservices.com/uploads/1/5/7/8/15781710/published/west-valley-city-electrician.png?1545381078" alt="" />
      </div>
    </Slider>
  
    </div>
  );
};

export default CarouselFeature;



