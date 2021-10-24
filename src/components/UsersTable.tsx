import { useState, useEffect } from "react";
import Pagination from "../common/Pagination";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(8);
  const { data: users } = useSelector((state) => state.userList);
  const { listUsers } = useActions();

  useEffect(() => {
    const fetchData = async () => {
      await listUsers();
    };

    fetchData();
  }, []);
  const indexOfLastart = currentPage * usersPerPage;
  const indexOfFirstart = indexOfLastart - usersPerPage;
  const currentusers = users.slice(indexOfFirstart, indexOfLastart);
  const paginate: (pageNumber: number) => void = (pageNumber: number) =>
    setCurrentPage(pageNumber);
  return (
    <>
      <h1> Art Pieces</h1>
      <div className="white-div">
        <table className="styled-table">
          <thead>
            <tr>
              <th id="itemHead">ID</th>
              <th id="nameHead">User Name</th>
              <th id="descriptionHead">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {currentusers &&
              currentusers.map((user, i) => (
                <tr key={i}>
                  <td>{i < 9 ? `0${i + 1}` : i + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.phoneNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        itemsPerPage={usersPerPage}
        totalItems={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default UsersTable;
