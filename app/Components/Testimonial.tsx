"use client";
import { useState } from "react";
import one from "../assets/test_two.jpg";
import two from "../assets/test_one.jpg";
import three from "../assets/test_three.jpg";
import Image from "next/image";
import "../styles/testimonial.scss";
export default function Testimonial() {
  const persons = [
    {
      id: 1,
      img: one,
      name: "John Davis",
      jobTitle: "Project Manager",
      testimony:
        "As a project manager, I have had the opportunity to work with numerous front-end developers, and I can confidently say that Nafiz is one of the best I've come across. His ability to understand and translate our requirements into functional and visually appealing web interfaces was remarkable. I wholeheartedly recommend Michael for any front-end development role.",
    },
    {
      id: 2,
      img: two,
      name: "Sarah Thompson",
      jobTitle: "UX Designer",
      testimony:
        " I had the pleasure of working closely with Nafiz, a talented front-end developer, on a recent project. His attention to detail and commitment to creating exceptional user experiences were truly impressive. I would highly recommend Nafiz to any team in need of a skilled front-end developer.",
    },

    {
      id: 3,
      img: three,
      name: "Lisa Johnson",
      jobTitle: "Digital Marketing Manager",
      testimony:
        " Working alongside Nafiz, our front-end developer, has been an absolute pleasure. His deep understanding of user experience and design principles greatly contributed to the success of our digital marketing campaigns. I would highly recommend Nafiz to any organization seeking a talented front-end developer who can elevate their digital presence.",
    },
  ];
  const [count, setCount] = useState(0);
  const [ani, setAni] = useState(false);

  function handleAni() {
    setAni((c) => !c);
    setTimeout(() => {
      setAni(false);
    }, 1100);
  }
  return (
    <div className="testimonial">
      <div className="testimonial_main">
        <h1 className="test_title">Testimonials</h1>
        <div className="all_testimony">
          <div className="buttons">
            <button>{"<"}</button>
            <button
              onClick={() => {
                setCount((c) => (c === persons.length - 1 ? 0 : c + 1));
                handleAni();
              }}
            >
              {">"}
            </button>
          </div>
          <div
            className="testimonies"
            style={{
              transform: `translateX(-${count * 100}%)`,
            }}
          >
            {persons.map((testimony, index) => (
              <div className="testimony" key={index}>
                <Image src={testimony.img} alt="testimonial img" />
                <h1>{testimony.name}</h1>
                <h2>{testimony.jobTitle}</h2>
                <p>{testimony.testimony}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
