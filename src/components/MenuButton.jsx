import { useState } from "react";
import { Link } from "react-router-dom";

import style from "styled-components";
import { FaStar } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { GiPresent } from "react-icons/gi";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 8,
      marginTop: theme.spacing(0.1),
      minWidth: 200,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "6px",
      },
    },
  }));
  return (
    <>
      <MenuBtn
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        <AiOutlineMenu size={36} />
      </MenuBtn>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          김영웅님 안녕하세요!
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />

        <MenuLink to={"/product/list"}>
          <MenuItem onClick={handleClose} disableRipple>
            <GiPresent size={26} />
            상품 페이지
          </MenuItem>
        </MenuLink>
        <Divider sx={{ my: 0.5 }} />

        <MenuLink to={"/bookmark"}>
          <MenuItem onClick={handleClose} disableRipple>
            <FaStar size={26} />
            북마크 페이지
          </MenuItem>
        </MenuLink>
      </StyledMenu>
    </>
  );
}

const MenuBtn = style.span`
  cursor: pointer;
  margin-right: 6rem;
`;

const MenuLink = style(Link)`
  text-decoration: none;
  color: black
`;
