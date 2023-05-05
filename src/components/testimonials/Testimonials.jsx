import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Working with Harsh on our React project was an absolute pleasure. He brought a level of expertise and attention to detail that we truly appreciated. Our project was completed on time and within budget, and we were extremely satisfied with the end result. I would highly recommend Harsh to anyone looking for a skilled React developer.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of Centralitics",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "I had the pleasure of collaborating with Harsh on a React project recently and was thoroughly impressed with his skills and professionalism. He was able to tackle complex problems with ease and provided valuable insights throughout the development process. I would highly recommend Harsh to anyone in need of a top-notch React developer.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of CCDev",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Harsh's expertise in Flutter and hybrid app development was instrumental in the success of our project. He was able to create a beautiful and functional app that exceeded our expectations. Harsh was professional, communicative, and a pleasure to work with. I would not hesitate to recommend him to anyone in need of a skilled Flutter developer.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}