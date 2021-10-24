import { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import ArtPieces from "../components/ArtPieces";
import UsersTable from "../components/UsersTable";

const AdminScreen = () => {
  const { listArts, clearArtDetail } = useActions();
  const { data: arts, error, loading } = useSelector((state) => state.artList);
  const { data: artDetails } = useSelector((state) => state.artDetails);
  const [showUsers, setShowUsers] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await listArts();
    };

    fetchData();
  }, []);
  return (
    <div className="admin">
      <div className="side-bar">
        <span
          className={showUsers ? "home" : "home-active"}
          onClick={() => setShowUsers(false)}
        ></span>
        <span
          className={showUsers ? "users-active" : "users"}
          onClick={() => setShowUsers(true)}
        ></span>
      </div>
      <div className="art-pieces">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {showUsers ? <UsersTable /> : <ArtPieces />}

            {artDetails && (
              <div className="popup">
                <img className="popImg" src={artDetails.image} alt="" />
                <div className="popup-body">
                  <h4 className="artist">{artDetails.artist}</h4>
                  <span>{artDetails.description}</span>
                </div>
                <span
                  className="closeX"
                  onClick={() => clearArtDetail()}
                ></span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminScreen;
