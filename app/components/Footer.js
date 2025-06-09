import Link from "next/link";
import Image from "next/image";

import "../styles/footer.scss";

import appleStore from "/public/AppleStoreIcon.png";
import googlePlay from "/public/GooglePlayIcon.png";

import facebook from "/public/facebook-white.svg";
import instagram from "/public/instagram-white.svg";
import twitter from "/public/twitter-white.svg";

import copyright from "/public/copyright-icon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Treatments</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Locations</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="/">Newsletter</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Podcast</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/">Terms of Use</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <h4>Mobile Apps</h4>
          <Link href="/">
            <Image src={appleStore} alt="apple store icon" />
          </Link>
          <Link href="/">
            <Image src={googlePlay} alt="google play icon" />
          </Link>

          <div className="socials-container">
            <Link href="/">
              <Image src={instagram} alt="instagram" />
            </Link>
            <Link href="/">
              <Image src={twitter} alt="twitter" />
            </Link>
            <Link href="/">
              <Image src={facebook} alt="facebook" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="disclaimer">
          The content on this website is not a substitute for medical advice,
          treatment, or diagnosis.
        </p>
        <p className="copyright">
          <Image src={copyright} alt="copyright icon" /> 2022 Kinetic Centre
          USA. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
