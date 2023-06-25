"use client";
import "../styles/button_social.scss";
import Link from "next/link";

import { useInView } from "react-intersection-observer";
export default function HireButton_Social() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="button_social">
      <div className="button_social_main">
        <button className="cfa_button">
          <Link
            href="https://www.upwork.com/freelancers/~01a9ab19cba2c9d6c6"
            target="blank"
          >
            Hire Me {">"}
          </Link>
        </button>{" "}
        <div className="social" ref={ref}>
          <Link
            href="https://www.upwork.com/freelancers/~01a9ab19cba2c9d6c6"
            target="blank"
          >
            <svg
              className={`upwork ${inView && "social_anime"}`}
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548 2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nafiz-mahmud-603063226/"
            target="blank"
          >
            <svg
              className={`linkedin ${inView && "social_anime"}`}
              style={{ animationDelay: ".2s" }}
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
            </svg>
          </Link>
          <Link href="https://twitter.com/nafiz_mahmud_99" target="blank">
            <svg
              className={`twitter ${inView && "social_anime"}`}
              style={{ animationDelay: ".4s" }}
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
          </Link>
          <Link href="https://github.com/Nafiz-Mahmud" target="blank">
            <svg
              className={`github ${inView && "social_anime"}`}
              style={{ animationDelay: ".6s" }}
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
