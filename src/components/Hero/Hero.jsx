import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import img from "../Hero/manan.png"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manan</h1>
        <p className={styles.description}>
          I'm a Undergraduate in the field of Information Technology and MERN
          Stack Developer. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:manankhandelwal@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={img}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
