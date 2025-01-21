import { useState } from "react";
import "./styles.css";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      author: "John Doe",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Software Engineer",
      company: "Tidal wave",
      quote:
        "Working with this team has been an incredible experience. Their attention to detail and dedication to quality are unmatched.",
    },
    {
      id: 2,
      author: "Jane Smith",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Graphic Designer",
      company: "Design Studio B",
      quote:
        "Design is not just what it looks like, but how it works. Inspiration drives innovation.",
    },
    {
      id: 3,
      author: "Michael Brown",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Product Manager",
      company: "Tech Innovations Inc.",
      quote:
        "Leading teams and delivering results is my passion. Collaboration makes all the difference.",
    },
    {
      id: 4,
      author: "Emily Davis",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Content Writer",
      company: "Creative Words Co.",
      quote:
        "Words can inspire, create connections, and spark ideas. Storytelling is my forte.",
    },
    {
      id: 5,
      author: "Chris Wilson",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Data Scientist",
      company: "Analytics Pro",
      quote:
        "Data is the new oil, and turning it into actionable insights is my superpower.",
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
