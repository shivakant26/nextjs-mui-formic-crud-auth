import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Alert, Grid, Snackbar, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { roleValidation } from "../../Validation/RoleValidation";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { addRole, updateRole } from "@/Redux/roleSlice";

const RoleForm = () => {
 const router = useRouter();
 const id = router.query.id;
  const roleResp = useSelector((state) => state?.role?.roledata);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      roleLabel: "",
      roleKey: "",
    },
    validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      if (id) {
        let data = { values, id };
        dispatch(updateRole(data));
        toast("Update Role Successfully");
      } else {
        dispatch(addRole(values));
        toast("Create Role Successfully");
      }
      resetForm();
      router.push(`/Roles/`)
    },
  });

  useEffect(() => {
    if (id !== undefined) {
      let current_obj = roleResp[id];
      formik.setFieldValue("roleLabel", current_obj?.roleLabel);
      formik.setFieldValue("roleKey", current_obj?.roleKey);
    }
  }, [roleResp]);

  return (
    <>
      <Stack className="form-section">
          <form onSubmit={formik.handleSubmit}>
            <Grid container xs={12} spacing={3}>
              <Grid item sm={6} sx={{ mb: 2 }}>
                <div className="form-field">
                  <TextField
                    name="roleLabel"
                    label="Role Label"
                    size="small"
                    variant="outlined"
                    fullWidth
                    autoComplete="off"
                    value={formik.values.roleLabel}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.roleLabel &&
                      Boolean(formik.errors.roleLabel)
                    }
                    helperText={formik.touched.roleLabel && formik.errors.roleLabel}
                  />
                </div>
              </Grid>
              <Grid item sm={6} sx={{ mb: 2 }}>
                <div className="form-field">
                  <TextField
                    name="roleKey"
                    label="Role Key"
                    size="small"
                    variant="outlined"
                    fullWidth
                    autoComplete="off"
                    value={formik.values.roleKey}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.roleKey && Boolean(formik.errors.roleKey)
                    }
                    helperText={formik.touched.roleKey && formik.errors.roleKey}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid sm={12}>
              <div className="form-field">
                <Button variant="contained" type="submit">
                  {id ? "Update Role" : "Create Role"}
                </Button>
              </div>
            </Grid>
          </form>
      </Stack>
    </>
  );
};

export default RoleForm;