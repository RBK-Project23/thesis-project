import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
   // dots: true,
   // infinite: true,
   // speed: 500,
   // slidesToShow: 3,
   // slidesToScroll: 1,


    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div style={{ marginBottom: "50px" }} className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-gray-100 h-[450px] text-black rounded-xl"
            >
              <div className="h-56 bg-slate-950 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-transparent hover:bg-slate-950 text-slate-950 font-semibold hover:text-white py-2 px-4 border border-indigo-950 hover:border-transparent rounded">
                  See More
                </button>
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
