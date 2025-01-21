import { useState } from "react";
import "./styles.css";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      author: "Mukesh Ambani",
      image:
        "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQFfD2peuQDljoEoroLKmBr0rAPQMKe8ek0s8GiKwXYzX0mA5gfNnviQ5rEdmy-cH04&psig=AOvVaw21UXmf26--9gsomvtDWL32&ust=1737516579829000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDo6_3vhYsDFQAAAAAdAAAAABAE",
      title: "Software Engineer",
      company: "Reliance Group",
      quote:
        "Working with this team has been an incredible experience. Their attention to detail and dedication to quality are unmatched.",
    },
    {
      id: 2,
      author: "Gautam adani",
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/240105025129-gautam-adani-11192022.jpg?c=original",
      title: "Chairperson",
      company: "Adani Group",
      quote:
        "Leading teams and delivering results is my passion. Collaboration makes all the difference.",
    },
    {
      id: 3,
      author: "Amitabh Bachchan",
      image:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRamZ61AD3ZJdbIfulThBpr4oUie6F1SgxjUimyafQVrIIwpWgdb3-pd8rSUt1gG-_btXCr4LXLnGWIu6Y",
      title: "Actor",
      company: "Bollywood",
      quote:
        "Acting is my forte, and I'm passionate about bringing characters to life on the stage.",
    },
    {
      id: 4,
      author: "Ratan Naval Tata",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Ratan_Tata_2011_%28The_TCS_Story_Launch_-_CII%29_%28cropped%29.jpg",
      title: "Former chairperson",
      company: "Tata Group",
      quote:
        "Ups and downs in life are very important to keep us going; a straight line even in an ECG means we are not alive.",
    },
    {
      id: 5,
      author: "Kapil Dev",
      image: "https://www.csaspeakersindia.in/media/pictures/profile/4906.png",
      title: "Former Captain",
      company: "Indian Cricket Team",
      quote: "You don't play for the crowd, you play for the country.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials">
      <div className="testimonials-item">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].author}
          className="testimonials-image"
        />
        <h3>{testimonials[currentIndex].author}</h3>
        <p className="testimonials-title">
          {testimonials[currentIndex].title} at{" "}
          {testimonials[currentIndex].company}
        </p>
        <blockquote className="testimonials-quote">
          {testimonials[currentIndex].quote}
        </blockquote>
      </div>
      <div className="testimonials-controls">
        <button onClick={handlePrevious}> &lt; Previous </button>
        <button onClick={handleNext}> Next &gt;</button>
      </div>
    </div>
  );
};
export default Testimonials;
