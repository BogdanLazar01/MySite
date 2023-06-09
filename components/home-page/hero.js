import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/bogdan.jpeg"
          alt="An image showing Bogdan"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I'm Bogdan</h1>
      <p>
        This is where you'll find everything you need to know about me. From
        personal achievements, to real work experiences and notable projects,
        all in a blog post format.
      </p>
    </section>
  );
}

export default Hero;
