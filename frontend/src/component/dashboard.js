import React, { useState, useEffect } from "react";
import "./dashborad.css";
import DenseTable from "./usertable";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Papa from "papaparse";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../component/footer";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
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
      console.error("Error sending email:", error.response.data);
    }
  };

  const updateStatus = async (email, initialStatus) => {
    try {
      const status = !initialStatus;
      console.log('email: '+email,'status :'+status);
      const confirmUser = window.confirm(!initialStatus?'Are you sure you want to confirm this user?':'Are you sure you want to pend this user?');
      if(confirmUser){
      
         const response = await axios.post('http://localhost:7000/users/updateStatus', {email, status});
       console.log(response);
       window.location.reload();
     
      }
      

     }
     catch (err){
      console.log(err);
    }
  };

  const deleteUser = async (userId) => {
    console.log("Deleting user with ID:", userId);
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );

      if(confirmDelete){
         await axios.delete(`http://localhost:7000/tech/delete/${userId}`);
      // Update the users state to reflect the deletion
      const updatedUsers = users.filter(user => user.id !== userId);
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

  if (filter && filter !== "all") {
    filteredUsers = filteredUsers.filter((user) => user.type_user === filter);
  }

  // Pagination logic
  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const visibleUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  // Export CSV logic
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
    <div id='body'>
     <div class="dashboard-container">
     <div id="dashboard-title">
        <h1>DASHBORAD ADMINISTRATOR </h1>
     
     </div>
     
     <div class="dashboard-tab">
       
       <DenseTable users ={users} deleteUser={deleteUser} updateStatus={updateStatus} />
        
     </div>


    </div> 
    </div>
    </>
  );
}
