import classes from './Welcome.module.css'


function Welcome(params) {
  return (
    <section className={classes['section-welcome']}>
      <h1 className="hero-image-title">Welcome to my Website</h1>
      <p className="hero-image-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi
        vitae velit finibus vestibulum. Nullam sit amet augue in dolor semper
        faucibus vitae a metus. Sed vitae mi augue.{" "}
      </p>
    </section>
  );
}

export default Welcome;
