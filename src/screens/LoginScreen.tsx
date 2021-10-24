import { useState } from "react";
import { Redirect } from "react-router-dom";

import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const LoginScreen = (props: any) => {
  const { login } = useActions();
  const {
    loading,
    error,
    data: userInfo,
  } = useSelector((state) => state.userInfo);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    await login(username, password);
    console.log("userInfo===", userInfo);
    if (userInfo?.role === "admin") <Redirect to="/admin" />;
    else <Redirect to="/gallery" />;

    // <Redirect to="/" />;
  };
  return (
    <div className="login-background">
      <div className="center-content">
        <div className="label-form">
          <h1>Log In</h1>
        </div>
        <form className="form-new" onSubmit={submitHandler}>
          {loading && <LoadingBox></LoadingBox>}
          {error?.message && (
            <MessageBox variant="danger">{error.message}</MessageBox>
          )}
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="password-input">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="show-icon"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Login
            </button>
          </div>
          <div>
            <label />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
