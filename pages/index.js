import classes from './styles/index.module.css';
import Image from 'next/image';
import Link from 'next/link';

function HomePage() {
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.imageWrapper}>
        <div className={classes.bgImageWrapper}>
          <Image src="/images/star-bg.png" width="1692" height="1608" alt="" />
        </div>
      </div>

      <div className={classes.hero}>
        <h1 className={classes.title}>
          Creative & Corporate <br></br>{" "}
          <span className={classes.video}>Video</span>{" "}
          <span className={classes.production}>Production</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
          iaculis ligula ultrices lorem cursus tincidunt.
        </p>
      </div>

      <div>

        <div className={classes.container}>
          <div id={classes.one}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>

          <div id={classes.two}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>{" "}
            </div>
          </div>
          <div id={classes.three}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>
          <div id={classes.four}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>
          <div id={classes.five}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>
          <div id={classes.six}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>
          <div id={classes.seven}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>
          <div id={classes.eight}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>
          <div id={classes.nine}>
            <div className={classes.centered}>
              <h3 id={classes.clientTitle}>Client</h3>{" "}
              <p id={classes.client}>pARIATUR COMPANY INC.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container2}>
        <div className={classes.een}>
          <h2>
            creative & <br></br> corporate video production
          </h2>
        </div>
        <div className={classes.twee}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat ligula neque, nec sagittis ante blandit vitae. Aliquam
            iaculis ligula ultrices lorem cursus tincidunt. <br></br> <br></br>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
        </div>
        <div className={classes.drie}>
          <h2>STRATEGY</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ul>
            <Link href="#">
              <li>Video strategy</li>
            </Link>
            <Link href="#">
              <li> Content planning</li>
            </Link>
            <Link href="#">
              <li>Campaign planning</li>
            </Link>
          </ul>
        </div>
        <div className={classes.vier}></div>
        <div className={classes.vijf}>
          <h2>PRODUCTION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <ul>
            <Link href="#">
              <li>Storytelling</li>
            </Link>
            <Link href="#">
              <li>Creative ideas</li>
            </Link>
            <Link href="#">
              <li>Animation</li>
            </Link>
          </ul>
        </div>
        <div className={classes.zes}>
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <ul>
            <Link href="#">
              <li>Youtube optimisation</li>
            </Link>
            <Link href="#">
              <li>Facebook optimisation</li>
            </Link>
            <Link href="#">
              <li>Instagram optimisation</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={classes.container3}>
        <h1>we create videos that accomplish our client's goals.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </p>

        <div className={classes.container4}>
          <Link href="#">
            {" "}
            <div className={classes.logo1}></div>
          </Link>
          <Link href="#"> <div className={classes.logo2}></div></Link>
           <Link href="#"><div className={classes.logo3}></div></Link>
           <Link href="#"><div className={classes.logo4}></div></Link>
           <Link href="#"><div className={classes.logo5}></div></Link>
           <Link href="#"><div className={classes.logo6}></div></Link>
           <Link href="#"><div className={classes.logo7}></div></Link>
           <Link href="#"><div className={classes.logo8}></div></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
