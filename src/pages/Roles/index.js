import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import DailogBox from "@/Common/DailogBox/DailogBox";
// import { toast } from "react-toastify";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { deleteRole } from "@/Redux/roleSlice";
import { toast } from "react-toastify";


const RoleList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const roleResponse = useSelector((state) => state?.role?.roledata);
  const [roleList, setRoleList] = useState();
  const [open , setOpen] = useState(false);
  const [selectId , setSelectId] = useState();
  const Roleedit = (id) => {
    router.push(`/Roles/${id}`);
  };

  const roleDelete = (id) => {
    setOpen(true)
    setSelectId(id)
  };

  const sure = () =>{
      dispatch(deleteRole(selectId));
      toast.error("Delete User Successfully");
      setOpen(false)
  }

  const createRole = () => {
    router.push("/Roles/create");
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setRoleList(roleResponse);
  }, [roleResponse]);

  return (
    <>
    {
      open && <DailogBox open={open} onClose={handleClose} sure={sure}/>
    }
      <div className="table_container">
        <Box className="ui-heading">
          <Button variant="outlined" className="create-btn" onClick={createRole}>
            <AddIcon />
            Create Role
          </Button>
        </Box>
        <Box className="role-table-section">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Role Label</TableCell>
                  <TableCell>Role Key</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {roleList?.length > 0 ? (
                  <>
                    {roleList?.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index}</TableCell>
                          <TableCell>{item.roleLabel}</TableCell>
                          <TableCell>{item.roleKey}</TableCell>
                          <TableCell>
                            <Button
                              className="edit-btn"
                              variant="contained"
                              color="success"
                              onClick={() => Roleedit(index)}
                            >
                              <ModeEditOutlineRoundedIcon />
                            </Button>
                            <Button
                              className="del-btn"
                              variant="contained"
                              color="error"
                              onClick={() => roleDelete(index)}
                            >
                              <DeleteRoundedIcon />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </>
                ) : (
                  <TableRow >
                    <TableCell colSpan={7} style={{color:"red"}}>
                      Record Not Found !
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};

export default RoleList;

