import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <Paper sx={{ width: 320, maxWidth: "100%", height:"90vh" }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText className="list-item">
              <Link href="/Users/">user</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText className="list-item">
              <Link href="/Users/create">create user</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Person2Icon />
            </ListItemIcon>
            <ListItemText className="list-item">
              <Link href="/Roles/">role</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <GroupAddIcon/>
            </ListItemIcon>
            <ListItemText className="list-item">
              <Link href="/Roles/create">create role</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText className="list-item">
              <Link href="/Logout/">logout</Link>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  );
};

export default Sidebar;
