import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";

const Hero = () => {
  return (
    // adding the global styling class to the section "paddings"
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className={`innerWidth ${css.container}`}
      >
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hi There,
            <br />
            I'm Sreeram.
          </motion.span>

          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="ternaryText"
          >
            Fueled by caffeine and driven by code,
            <br />I turn complex problems into simple solutions{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={fadeIn("up", "tween", 0.4, 1.2)}
            src="./memoji.png"
            alt=""
          />
        </motion.div>

        <div style={{ marginTop: "50px" }} />
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className={css.experience}
        >
          <div>
            <a className={css.email} href="mailto:sreeram.charagundla@outlook.com">
              sreeram.charagundla@outlook.com
              <br />
            </a>
          </div>
        </motion.div>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">3+</div>
            <div className="secondaryText">
              <div>Years Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img
              src="./certificate.png"
              alt="Certificate of Software Engineer"
            />
            <span>Software Engineer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
