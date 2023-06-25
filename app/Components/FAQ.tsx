"use client";
import "../styles/faq.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
export default function FAQ() {
  const [active, setActive] = useState(0);
  const faqs = [
    {
      id: 1,
      question: "Will my website be developed to be responsive?",
      answer:
        "Absolutely! Ensuring a seamless user experience across all devices is a top priority in our web development process. We understand the importance of responsive web design in todays mobile-driven world. I will employ the latest industry standards and techniques to create a website that adapts beautifully to various screen sizes, from desktops and laptops to tablets and smartphones.Rest assured, your website will be responsive that not only meets your expectations but also provides an exceptional user experience for your audience.",
    },
    {
      id: 2,
      question:
        "What is the anticipated timeline for the development of the website?",
      answer:
        "The timeline for website development can vary depending on several factors, such as the complexity of the project, the availability of resources, and the specific requirements. It is essential to thoroughly analyze the project scope and conduct a feasibility study to provide an accurate estimate of the time required for website development. That being said, a typical website should be developed between 1-2 weeks",
    },
    {
      id: 3,
      question:
        "What would be the estimated cost for the development of my website?",
      answer:
        "The cost of developing a website can vary significantly depending on various factors, including the complexity of the project, the desired features and functionalities, the level of customization, and the expertise of the development team. To provide an accurate cost estimate for your specific website, it would be necessary to analyze your requirements and specifications in detail. Provide your specific requirements and budget so that we can engage in a thorough discussion and reach a mutually agreed-upon conclusion.",
    },
  ];
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  function handleActive(id: number) {
    if (active === id) {
      setActive(0);
    } else {
      setActive(id);
    }
  }
  return (
    <div className="faq_section">
      <div className="faq_section_main">
        <h1>FAQ Section</h1>
        <div className="faqs" ref={ref}>
          {faqs.map((faq, index) => (
            <div
              className={`faq ${inView && "faq_anime"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              key={faq.id}
            >
              <div
                className="faq_question"
                onClick={() => handleActive(faq.id)}
              >
                <h2>{faq.question}</h2>
                <h3>{active === faq.id ? "-" : "+"}</h3>
              </div>
              <p
                className={`answer ${
                  active === faq.id ? "faq_answer_open" : "none"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
