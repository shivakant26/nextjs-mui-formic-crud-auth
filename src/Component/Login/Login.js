import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { loginValidation } from "@/Validation/LoginValidation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/Redux/authSlice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state)=>state.auth)
  console.log(123,auth)
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values, { resetForm }) => {
      // dispatch(loginUser(values))
      if(values.userName === 'admin' && values.password === '123456'){
        localStorage.setItem('token',"123456ds21sd542ssd");
        toast.success("login succussfully")
        router.push("/Users")
      }else if(values.userName !== 'admin' || values.password !== '123456'){
        toast.error("something went wrong!")
      }
      resetForm();
    },
  });
  // React.useEffect(()=>{
  //   if(auth?.status === 200){
  //     toast.success(`${auth.message}`)
  //     router.push("/Users")
  //   }else if(auth?.status === 400){
  //     toast.error(`${auth.message}`)
  //   }
  // },[auth])
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <div className="form-field">
              <TextField
                name="userName"
                label="User Name"
                size="small"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
              />
            </div>
            <div className="form-field">
              <TextField
                name="password"
                label="Password"
                size="small"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div className="form-field">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mb: 2 }}
            >
              Login
            </Button>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    <ToastContainer />
    </>
  );
};

export default Login;
