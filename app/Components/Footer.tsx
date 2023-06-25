"use client";
import "../styles/footer.scss";
export default function Footer() {
  const date = new Date();

  // const day = date.getDay();
  // const month = date.getMonth();
  const year = date.getFullYear();

  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();
  // console.log({ day, month, year, hours, minutes, seconds });
  return (
    <div className="footer animate-pulse">
      <h1>Nafiz X Metal &copy; | {year}</h1>
    </div>
  );
}
