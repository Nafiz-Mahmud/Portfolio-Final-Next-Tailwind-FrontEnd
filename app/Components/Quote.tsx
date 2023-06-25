"use client";
import "../styles/quote.scss";
import { useInView } from "react-intersection-observer";
export default function Quote() {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <div className="quote">
      <div
        className={`quote_main ${inView && "add_quote_animation"}`}
        ref={ref}
      >
        <h1
          className={`quote_title ${inView && "add_quote_title_animation"}`}
          style={{ animationDelay: ".4s" }}
        >
          &quot; The beauty of programming lies in its ability to transform
          imagination into reality. &quot;
        </h1>
        <h1
          className={`quote_author ${inView && "add_quote_title_animation"}`}
          style={{ animationDelay: ".6s" }}
        >
          - ChatGPT
        </h1>
      </div>
    </div>
  );
}
