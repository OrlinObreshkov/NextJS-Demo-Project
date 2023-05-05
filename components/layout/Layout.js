import MainHeader from "../header/MainHeader";
import Hero from "../UI/Hero/Hero";
import classes from "./layout.module.css";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <Hero/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
