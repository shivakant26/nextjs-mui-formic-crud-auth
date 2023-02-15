import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useState } from "react";

const DailogBox = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this <b>User</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#0078ce",
                color: "white",
              },
            }}
            variant="outlined"
            onClick={props.onClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#388748",
                color: "white",
              },
            }}
            variant="outlined"
            color="success"
            onClick={props.sure}
            autoFocus
          >
            Sure
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DailogBox;
