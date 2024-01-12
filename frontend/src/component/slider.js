import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideCard.css";

const SlideCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: "50px" }} className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="slide-card">
              <div className="image-container">
                <img src={d.img} alt="" className="slide-image" />
              </div>

              <div className="content-container">
                <p className="title">{d.name}</p>
                <p className="review">{d.review}</p>
                <button className="see-more-button">See More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: `Activities`,
    img: `/sliderimages/Activities.jpg`,
    review: `Our activity finder is bursting with programme ideas, and can be searched by section, time, cost, setting, type or learning outcomes..`,
  },
  {
    name: `Badges`,
    img: `/sliderimages/badges.jpg`,
    review: `Master something you love, or try something shiny and new. These badges allow a young person to gain whichever badge is appropriate to the level they have reached.`,
  },
  {
    name: `Nights Away`,
    img: `/sliderimages/nights.jpg`,
    review: `Whether camping, hostelling, or sleepovers, nights away form an integral part of Scouts, which every young person should have an opportunity to take part in.`,
  },
  {
    name: `Training`,
    img: `/sliderimages/training.jpg`,
    review: `           Learn more about the training for your role and how you can prepare young people with skills for life.`,
  },
  {
    name: `Transforming our volunteer experience`,
    img: `/sliderimages/lasti.jpg`,
    review: `Find out how we're transforming volunteering at Scouts to make it easier, more enjoyable and rewarding.`,
  },
];

export default SlideCard;
