import "../styles/header.scss";
import Image from "next/image";
import portrait from "../assets/portrait.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header_main">
        <div className="info">
          <div className="name_container">
            <h1 className="name">Nafiz Mahmud</h1>
          </div>
          <div className="skill_container">
            <h1 className="skill">Front-End Dev</h1>
          </div>
          <div className="exp_container">
            <p className="exp">2 year+ Experience</p>
          </div>
          <div className="email_container">
            <div className="email">
              <svg
                className="email_icon"
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232 512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
              </svg>
              <h1>nafizmahmud102@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="portrait_image">
          <Image
            className="pic"
            src={portrait}
            priority={true}
            alt="Self Portrait"
            placeholder="empty"
          />
        </div>
      </div>
    </div>
  );
}
