import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import { deleteUser } from "@/Redux/userSlice";
import { useEffect, useState } from "react";
import DailogBox from "@/Common/DailogBox/DailogBox";
import { toast } from "react-toastify";

const UserList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [selectId , setSelectId] = useState();
  const [open , setOpen] = useState(false);
  const userData = useSelector((state) => state?.user?.userData);
  
  const createUser = () =>{
    router.push(`/Users/create`)
  }
  const userDelete = (id) => {
    setOpen(true)
    setSelectId(id)
  };

  const sure = () =>{
      dispatch(deleteUser(selectId));
      toast?.error("Delete User Successfully");
      setOpen(false)
  }
  const edit = (id) =>{
    router.push(`/Users/${id}`)
  }

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
  },[userData])

  return (
    <>
    {
      open && <DailogBox open={open} onClose={handleClose} sure={sure}/>
    }
      <div className="table_container">
        <Box className="ui-heading">
          <Button variant="outlined" className="create-btn" onClick={createUser}>
            <AddIcon />
            Create User
          </Button>
        </Box>
        <Box className="role-table-section">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData?.length > 0 ? (
                  <>
                    {userData?.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.userName}</TableCell>
                          <TableCell>{item.mobile}</TableCell>
                          <TableCell>{item.roleKey}</TableCell>
                          <TableCell>
                            <Button
                              className="edit-btn"
                              variant="contained"
                              color="success"
                              onClick={() => edit(index)}
                              >
                              <ModeEditOutlineRoundedIcon />
                            </Button>
                            <Button
                              className="del-btn"
                              variant="contained"
                              color="error"
                              onClick={() => userDelete(index)}
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

export default UserList;
