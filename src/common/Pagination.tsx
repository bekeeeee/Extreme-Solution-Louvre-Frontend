const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="">
      <ul className="pagination">
        <button
          className="previous"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          &laquo;
        </button>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <button
          className="next"
          disabled={currentPage === pageNumbers.length}
          onClick={() => paginate(currentPage - 1)}
        >
          &raquo;
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
