$('.popular-div').slick({
    centerMode: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.js-prev-slide',
    nextArrow: '.js-next-slide',
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1790,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 6.3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 4.9,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });