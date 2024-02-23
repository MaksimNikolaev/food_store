export const settingsSlider = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
