import Link from "next/link";
import classes from "./main-header.module.css";


function MainHeader() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="#">
        <img className={classes.logo} src="../images/Logo-small.webp" />
        </Link>
      </div>

      <div className={classes.hamburger}>
         <Link href="#"> <svg viewBox="0 0 10 8" width="27">
          <path
            d="M1 1h8M1 4h 8M1 7h8"
            stroke="#fff"
            opacity="0.5"
            stroke-width="0.7"
          />
        </svg>
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
