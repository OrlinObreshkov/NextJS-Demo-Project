import { useRouter } from "next/router";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../hooks/reducers/registerSlice";
import { sessionStorageActions } from "../hooks/reducers/sessionStorageSlice";
import { signInActions } from "../hooks/reducers/signInSlice";
import classes from "./SignIn.module.css";

function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { signInEmail, signInPassword, error } = useSelector(
    (state) => state.signIn
  );
  const { email, password } = useSelector((state) => state.register);
  let { sessionEmail, sessionPassword } = useSelector((state) => state.session.sessionData);

  const emailHandler = (e) => {
    dispatch(signInActions.setSignInEmail(e.target.value));
  };

  const passwordHandler = (e) => {
    dispatch(signInActions.setSignInPassword(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === signInEmail && password === signInPassword) {
      sessionEmail = email;
      sessionPassword = password;
      dispatch(sessionStorageActions.setEmailData(sessionEmail));
      dispatch(sessionStorageActions.setPasswordData(sessionPassword));

      dispatch(signInActions.clearForm());
      dispatch(registerActions.clearForm());
      router.replace("/");
    } else {
      dispatch(signInActions.setError("Email and Password dosnt match !!!"));
    }

    console.log(email, password, signInEmail, signInPassword);
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <h1>Sign In</h1>
          <hr />
          <div className={classes.content}>
            <div className={classes.field}>
              <input
                className={classes.input}
                type="email"
                placeholder="Email"
                value={signInEmail}
                onChange={emailHandler}
              />
            </div>
            <div className={classes.field}>
              <input
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={passwordHandler}
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

export default SignIn;
