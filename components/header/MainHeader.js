import Link from "next/link";
import { useSelector } from "react-redux";
import LoggedNav from "./LoggedNav";
import classes from "./MainHeader.module.css";
import MainNav from "./MainNav";

function MainHeader() {
  const {sessionEmail, sessionPassword} = useSelector(state => state.session.sessionData)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <nav>
          {!sessionEmail && !sessionPassword ? <MainNav/> : <LoggedNav/>}
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
