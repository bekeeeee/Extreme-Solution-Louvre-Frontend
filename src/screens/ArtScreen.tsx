// import axios from "axios";
import { useEffect, useState } from "react";
import Art from "../components/Art";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import Pagination from "../common/Pagination";

const ArtScreen = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [artsPerPage] = useState<number>(8);
  const { listArts, clearArtDetail } = useActions();
  const { data: arts, error, loading } = useSelector((state) => state.artList);
  const { data: artDetails } = useSelector((state) => state.artDetails);

  console.log("arts", arts);

  useEffect(() => {
    const fetchData = async () => {
      await listArts();
    };

    fetchData();
  }, []);

  const indexOfLastart = currentPage * artsPerPage;
  const indexOfFirstart = indexOfLastart - artsPerPage;
  const currentarts = arts.slice(indexOfFirstart, indexOfLastart);

  // Change page
  const paginate: (pageNumber: number) => void = (pageNumber: number) =>
    setCurrentPage(pageNumber);

  return (
    <div className="gallery">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <h1 className="title"> Gallery</h1>

          <div className={artDetails ? "blur" : ""}>
            <div className="row center">
              {currentarts &&
                currentarts.map((art) => <Art art={art} key={art.id}></Art>)}
            </div>
          </div>
          {artDetails && (
            <div className="popup">
              <img className="popImg" src={artDetails.image} alt="" />
              <div className="popup-body">
                <h4 className="artist">{artDetails.artist}</h4>
                <span>{artDetails.description}</span>
              </div>
              <span className="closeX" onClick={() => clearArtDetail()}></span>
            </div>
          )}
        </>
      )}

      <Pagination
        itemsPerPage={artsPerPage}
        totalItems={arts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ArtScreen;
