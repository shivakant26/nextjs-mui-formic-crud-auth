import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            {/* <div className="menu">
              <ul>
                <li>
                  <Link href="/Users">User</Link>
                </li>
                <li>
                  <Link href="/Users/create">UserForm</Link>
                </li>
                <li>
                  <Link href="/Roles/create">createRole</Link>
                </li>
                <li>
                  <Link href="/Roles/">roleList</Link>
                </li>
              </ul>
            </div> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
