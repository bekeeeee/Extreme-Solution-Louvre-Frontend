import { useState } from "react";
import Pagination from "../common/Pagination";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

const ArtPieces = ({ art }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [artsPerPage] = useState<number>(8);
  const { data: arts, error, loading } = useSelector((state) => state.artList);
  const { deleteArtItem } = useActions();

  const indexOfLastart = currentPage * artsPerPage;
  const indexOfFirstart = indexOfLastart - artsPerPage;
  const currentarts = arts.slice(indexOfFirstart, indexOfLastart);
  const paginate: (pageNumber: number) => void = (pageNumber: number) =>
    setCurrentPage(pageNumber);
  return (
    <>
      <h1> Art Pieces</h1>
      <div className="white-div">
        <table className="styled-table">
          <thead>
            <tr>
              <th id="itemHead">Item</th>
              <th id="nameHead">Name</th>
              <th id="artistHead">Artist</th>
              <th id="descriptionHead">Description</th>
              <th id="actionHead">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentarts &&
              currentarts.map((art) => (
                <tr key={art.id}>
                  <td>
                    <img src={art.image} alt="" />
                  </td>
                  <td>{art.artist}</td>
                  <td>{art.artist}</td>
                  <td>{art.description}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteArtItem(art.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        itemsPerPage={artsPerPage}
        totalItems={arts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default ArtPieces;
