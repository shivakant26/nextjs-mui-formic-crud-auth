
import { Grid } from "@mui/material";
import { Router, useRouter } from "next/router";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const  DashLayout = ({children}) => {
  const router = useRouter();
    return (
      <div className="layout">
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={8}>
                {children}
          </Grid>
        </Grid> 
      </div>
    );
}

export default DashLayout;
