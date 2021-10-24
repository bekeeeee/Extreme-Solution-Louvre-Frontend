import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
 
  const { currentUser: currentUserFn } = useActions();
  const { data: currentUser } = useSelector((state) => state.userInfo);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      await currentUserFn();
    };
    fetchCurrentUser();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default ProtectedRoute;
