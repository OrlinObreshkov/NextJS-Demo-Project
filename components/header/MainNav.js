import Link from 'next/link';
import classes from './MainNav.module.css'

function MainNav() {
  return (
    <ul className={classes.menu}>
      <li className={classes.li}>
        <Link href="/">Home</Link>
      </li>
      <li className={classes.li}>
        <a href="#">Contacts</a>
      </li>
      <li className={classes.li}>
        <a href="#">About</a>
      </li>
      <li className={classes.li}>
        <Link href="/sign-in">Sign In</Link>
      </li>
      <li className={classes.li}>
        <Link href="/register">Register</Link>
      </li>
    </ul>
  );
}

export default MainNav;
