import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";
import AdminScreen from "../screens/AdminScreen";
import ArtScreen from "../screens/ArtScreen";
import LoginScreen from "../screens/LoginScreen";

const AuthenticatedRoute: () => JSX.Element = () => {
  const { currentUser: currentUserFn } = useActions();
  const { data: currentUser } = useSelector((state) => state.userInfo);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      await currentUserFn();
    };
    fetchCurrentUser();
  }, []);
  return currentUser?.role === "admin" ? (
    <AdminScreen />
  ) : currentUser?.role === "user" ? (
    <ArtScreen />
  ) : (
    <LoginScreen />
  );
};

export default AuthenticatedRoute;
