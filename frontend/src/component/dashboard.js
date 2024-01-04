import React, { useState, useEffect } from "react";
import "./dashborad.css";
import DenseTable from "./usertable";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Papa from "papaparse";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const sendPendingEmail = async (email, firstName) => {
    try {
      console.log(`Attempting to send email to ${email}`);
      const response = await axios.post(
        "http://localhost:7000/sendPendingEmail",
        {
          userEmail: email,
          userName: firstName,
        }
      );
      console.log("Email send response:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const updateStatus = async (email, initialStatus) => {
    try {
      const status = !initialStatus;
      console.log("email: " + email, "status :" + status);
      const confirmUser = window.confirm(
        !initialStatus
          ? "Are you sure you want to confirm this user?"
          : "Are you sure you want to pend this user?"
      );
      if (confirmUser) {
        const response = await axios.post(
          "http://localhost:7000/users/updateStatus",
          { email, status }
        );
        console.log(response);

        if (status === false) {
          console.log(`Sending pending email for ${email}`);
          const user = users.find((u) => u.email === email);
          if (user) {
            await sendPendingEmail(email, user.firstName);
          }
        }
        const updatedUsers = users.map((user) => {
          if (user.email === email) {
            return { ...user, status: response.data.status };
          }
          return user;
        });
        setUsers(updatedUsers);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );

      if (confirmDelete) {
        await axios.delete(`http://localhost:7000/tech/delete/${userId}`);
        // Update the users state to reflect the deletion
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    // Inner function that calls the API
    const fetchUsers = async () => {
      try {
        const resp = await axios.get("http://localhost:7000/users/getuser");

        setUsers(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter logic
  let filteredUsers = users;

  if (nameFilter) {
    filteredUsers = filteredUsers.filter((user) =>
      user.firstName.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }

  if (emailFilter) {
    filteredUsers = filteredUsers.filter((user) =>
      user.email.toLowerCase().includes(emailFilter.toLowerCase())
    );
  }

  if (filter) {
    filteredUsers = filteredUsers.filter((user) => user.type_user === filter);
  }

  // Pagination logic
  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  // Slicing filtered users array for current page
  const visibleUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const exportToCSV = () => {
    const csvData = filteredUsers.map((user) => ({
      FirstName: user.firstName,
      LastName: user.lastName,
      Email: user.email,
      Position: user.type_user,
    }));

    const csv = Papa.unparse(csvData);
    downloadCSV(csv);
  };

  const downloadCSV = (csv) => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "exportedData.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="body">
        <div className="dashboard-container">
          <div id="dashboard-title">
            <h1>DASHBORAD ADMINISTRATOR </h1>
          </div>

          <div className="filter-container">
            <input
              type="text"
              placeholder="Filter by name"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />

            <input
              type="text"
              placeholder="Filter by email"
              value={emailFilter}
              onChange={(e) => setEmailFilter(e.target.value)}
            />

            <select onChange={handleFilterChange} value={filter}>
              <option value="">All Positions</option>
              <option value="Scouts">Scouts</option>
              <option value="Commander">Commander</option>
              <option value="Parent">Parent</option>
            </select>
          </div>

          <button onClick={exportToCSV}>Export to CSV</button>

          <div className="dashboard-tab">
            <DenseTable
              users={visibleUsers}
              deleteUser={deleteUser}
              updateStatus={updateStatus}
            />
          </div>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
}
