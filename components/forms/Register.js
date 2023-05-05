import { Fragment } from "react";
import classes from "./Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../hooks/reducers/registerSlice";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { email, password, confirmPassword, error } = useSelector(
    (state) => state.register
  );

  const emailHandler = (e) => {
    dispatch(registerActions.setEmail(e.target.value));
  };

  const passwordHandler = (e) => {
    dispatch(registerActions.setPassword(e.target.value));
  };

  const confirmPasswordhandler = (e) => {
    dispatch(registerActions.setConfirmPassword(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      return dispatch(
        registerActions.setError("All fields must be filled !!!")
      );
    }

    if (!email.includes("@")) {
      return dispatch(registerActions.setError("Invalid email !"));
    }

    if (password.length < 5) {
      return dispatch(registerActions.setError("Password is to short !"));
    }

    if (password !== confirmPassword) {
      return dispatch(
        registerActions.setError("Password and confirm password dont match !")
      );
    }

    dispatch(registerActions.setEmail(email))
    dispatch(registerActions.setPassword(password))

    // dispatch(sessionStorageActions.setEmailData(email))
    // dispatch(sessionStorageActions.setPasswordData(password))

    console.log(email, password);
    router.replace("/");
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <h1>Register</h1>
          <hr />
          <div className={classes.content}>
            <div className={classes.field}>
              <input
                className={classes.input}
                type="email"
                placeholder="Email"
                value={email}
                onChange={emailHandler}
              />
            </div>
            <div className={classes.field}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordHandler}
              />
            </div>
            <div className={classes.field}>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={confirmPasswordhandler}
              />
            </div>
            {error && <span className={classes.error}>{error}</span>}
          </div>
          <div className={classes.action}>
            <button className={classes.button}>Sign in</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Register;
