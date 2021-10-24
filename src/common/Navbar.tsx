import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { RootState } from "../state";
const LouvreNavbar = (props: any) => {
  const { data: currentUser } = useSelector(
    (state: RootState) => state.userInfo
  );

  const { currentUser: currentUserFn } = useActions();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      await currentUserFn();
    };
    fetchCurrentUser();
  }, [currentUserFn]);

  return (
    <header className="row">
      {currentUser ? (
        <div>
          <Link className="brand" to="/">
            Laouvre
          </Link>
        </div>
      ) : null}
      <div>
        {currentUser?.username ? (
          <div className="dropdown">
            <span>{currentUser.username}</span>
            <span>{currentUser.role}</span>

            <i className="fa fa-caret-down"></i>
            <ul className="dropdown-content">
              <Link to="#signout" onClick={() => console.log("signout")}>
                Sign Out
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default LouvreNavbar;
