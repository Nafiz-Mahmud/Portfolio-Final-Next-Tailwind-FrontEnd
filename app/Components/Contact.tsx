"use client";
import "../styles/contact.scss";
import { useInView } from "react-intersection-observer";
export default function Contact() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="contact">
      <div className="contact_main">
        <h1 className="contact_title">Contact Me</h1>
        <div className="contacts_list" ref={ref}>
          <div className="email_container overflow-hidden">
            <div className={`email ${inView && "contact_anime"}`}>
              <svg
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
              >
                <path
                  fill="currentColor"
                  fillOpacity="0.6"
                  d="M477.5 536.3 135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z"
                ></path>
                <path
                  fill="currentColor"
                  d="m876.3 198.8 39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z"
                ></path>
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z"></path>
              </svg>
              <h1>nafizmahmud102@gmail.com</h1>
            </div>
          </div>
          <div className="phone_container overflow-hidden">
            <div
              className={`phone ${inView && "contact_anime"}`}
              style={{ animationDelay: ".2s" }}
            >
              <svg
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
              </svg>
              <h1>(+88) 01703-876066</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
