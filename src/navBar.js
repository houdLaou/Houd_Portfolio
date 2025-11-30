import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import './content.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <AppBar position="static" className="Content-body-up" sx={{ backgroundColor: 'rgb(215, 161, 13)' }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{color:"#03045E"}}>
            <h3>Houd Laouaoudja</h3>
          </Typography>

          <IconButton className="buttonMenu"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className="buttonMenu"/>
          </IconButton>
          <div className='nav-links' style={{display:""}}>
            <a href='#home' style={{color:"black",textDecoration:"none"}}><p>Home</p></a>
            <a href='#about' style={{color:"black",textDecoration:"none"}}><p>About</p></a>
            <a href='#work' style={{color:"black",textDecoration:"none"}}><p>Work</p></a>
            <a href='#contact' style={{color:"black",textDecoration:"none"}}><p>contact</p></a>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 120,       
            height: "auto",   
            top: "11%",  
            borderRadius: "10px 0 0 10px", 
          }
        }}
        ModalProps={{
          keepMounted: true,
          BackdropProps: { invisible: true}
        }}
      >
        <Box
          sx={{
            height: 160,        
            overflow: "auto",
            padding: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton component="a" href="#about">
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#work">
                <ListItemText primary="Work" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#contact">
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
