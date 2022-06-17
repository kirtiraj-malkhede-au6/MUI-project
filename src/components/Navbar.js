import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import MailIcon from "@mui/icons-material/Mail";
import Notification from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  // background: "lightblue",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Userbox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Latte
        </Typography>
        <LocalCafeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={9} color="error">
            <Notification />
          </Badge>
          <Avatar
            sx={{ width: "40px", height: "40px" }}
            src="https://www.profilepicture7.com/img/img_yiduiliangzhang/4/-1773499794.jpg"
            onClick={(event) => {
              setOpen(true);
            }}
          />
        </Icons>
        <Userbox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://www.profilepicture7.com/img/img_yiduiliangzhang/4/-1773499794.jpg"
            onClick={(event) => {
              setOpen(true);
            }}
          />
          <Typography variant="span">Kane</Typography>
        </Userbox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={(event) => setOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
