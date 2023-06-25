import "../styles/navbar.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav_title">
          <h1>Metal</h1>
        </div>
        {/* <ul>
          <li className="nav_home">
            <Link href="/">Home</Link>
          </li>
          <li className="projects">
            <Link href="/">Projects</Link>
          </li>
          <li className="contacts">
            <Link href="/">Contacts</Link>
          </li>
          <li className="burger">
            <svg
              fill="currentColor"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fill-rule="evenodd"
                d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 1 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 1 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zM1.75 12a.75.75 0 1 0 0 1.5h12.5a.75.75 0 1 0 0-1.5H1.75z"
              ></path>
            </svg>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
