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
        I blog about my skills and hobbies. This is the place to learn more about who I am.
      </p>
    </section>
  );
}

export default Hero;
