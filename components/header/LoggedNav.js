import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { sessionStorageActions } from '../hooks/reducers/sessionStorageSlice';
import classes from './LoggedNav.module.css'

function LoggedNav() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(sessionStorageActions.clearStorage())
  }

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
        <Link href="/cars">All Cars</Link>
      </li>
      <li className={classes.li}>
        <Link href="/add-car">Add Car</Link>
      </li>
      <li className={classes.li}>
        <Link href="#">Profile</Link>
      </li>
      <li className={classes.li}>
        <Link onClick={logoutHandler} href="/">Sign Out</Link>
      </li>
    </ul>
  );
}

export default LoggedNav;