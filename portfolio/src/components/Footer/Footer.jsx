import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTelegram,
  faSnapchat,
  faTwitter,
  faDiscord,
  faInstagram,
  faFacebook,
  faStackOverflow,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's build something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:charagundla.s@northeastern.edu">saying hi</a>
          </span>
          <span className="secondaryText">
            <a
              href="https://www.linkedin.com/in/sreeramcharagundla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://t.me/+17085131828"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a
              href="https://x.com/_sreeramc_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.snapchat.com/add/sreeram.98?src=QR_CODE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
            <a
              href="https://discord.com/Sreeram#7283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a
              href="https://www.instagram.com/sreeram__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/sreeram.1234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://stackoverflow.com/users/13405910/sreeram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
            <a
              href="https://medium.com/@sreeramcharagundla_15990"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a
              href="https://github.com/SreeramCharagundla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
        </div>

        {/* middle section with photo */}
        <div className={css.middle}>
                <img src="./photo.jpg" alt="My Photo" className={css.photo}/>
            </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Address</span>
            <p>Boston, MA</p>
          </div>
          <ul className={css.menu}>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
