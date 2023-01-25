import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

import { useUserAuth } from "../context/UserAuthContext";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
} from "./Avatar";

export default function BasicMenu() {
  // const menuRef = React.useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const AvatarButton = styled(Button)({
    borderRadius: "100%",
    padding: 0,
    margin: 0,
    height: "60px",
    width: "60px",
    outline: "4px solid var(--orange)",
  });

  return (
    <div>
      <div className="account-avatar">
        <Button
          id="basic-button"
          onClick={handleClick}
          style={{
            borderRadius: "100%",
            padding: 0,
            margin: 0,
            width: "64px",
            height: "64px",
            outline: "2px solid var(--accent1)",
          }}
        >
          <Avatar6 width="60" height="60" />
        </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        color="var(--background1)"
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
