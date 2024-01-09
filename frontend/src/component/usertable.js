import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "@mui/material/Link";

export default function DenseTable({ users, deleteUser, updateStatus }) {
  const status = (email, status) => {
    if (status) {
      return (
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => updateStatus(email, status)}
        >
          confirmed
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => updateStatus(email, status)}
        >
          pendding
        </Button>
      );
    }
  };
  return (
    <TableContainer
      component={Paper}
      style={{ background: "transparent", marginTop: "0vh", color: "black" }}
    >
      <h2 style={{ textAlign: "center", padding: "1vh" }}> Users list</h2>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
            >
              First Name
            </TableCell>
            <TableCell
              align="left"
              style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
            >
              Last Name
            </TableCell>
            <TableCell
              align="left"
              style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
            >
              E-mail
            </TableCell>
            <TableCell
              align="left"
              style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
            >
              Position
            </TableCell>
            <TableCell
              align="left"
              style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
            >
              PDF Files
            </TableCell>
            <TableCell
              align="left"
              style={{ color: "black", fontWeight: "bold", fontSize: "1rem" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.firstNme}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ color: "black" }}>
                {user.firstName}
              </TableCell>
              <TableCell  style={{ color: "black" }}>
                {user.lastName}
              </TableCell>
              <TableCell  style={{ color: "black" }}>
                {user.email}
              </TableCell>
              <TableCell  style={{ color: "black" }}>
                {user.type_user}
              </TableCell>
              <TableCell align="centre" style={{ color: "black" }}>
                {status(user.email, user.status)}
              </TableCell>
              <TableCell align="center" style={{ color: "black" }}>
                <Button
                  variant="outlined"
                  size="small"
                  component={Link}
                  href="http://localhost:3000/doc-istimara"
                  target="_blank"
                >
                  Istimara
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  component={Link}
                  href="http://localhost:3000/Engagement"
                  target="_blank"
                >
                  Engagement
                </Button>
              </TableCell>
              <TableCell align="centre" style={{ color: "black" }}>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  size="small"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
