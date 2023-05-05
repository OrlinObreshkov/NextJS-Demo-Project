import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes["hero-image-container"]}>
      <img
        src="/images/car.jpg"
        alt="Hero image"
        className={classes["hero-image"]}
      />
      <div className={classes["hero-image-overlay"]}></div>
    </div>
  );
}

export default Hero;
