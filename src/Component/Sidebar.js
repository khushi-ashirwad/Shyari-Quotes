import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import {RiMenu2Line} from "react-icons/ri"
import { NavLink } from 'react-router-dom';
import logo_img from "../images/Group 49110.png"
import "../Style/Sidebar.css"
import { Box, Grid, IconButton, Typography } from '@mui/material';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <>
           <Box sx={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
            <Box className="top_section">
                <img src={logo_img} style={{ display: isOpen ? "block" : "none" }} className="logo" alt="Logo"></img>
            </Box>
            <Grid container direction="column" spacing={0}>
                {menuItem.map((item, index) => (
                    <Grid item key={index}>
                        <NavLink to={item.path} className="link" activeClassName="active">
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item className="icon">
                                    {item.icon}
                                </Grid>
                                <Grid item component={Box} style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                    {item.name}
                                </Grid>
                            </Grid>
                        </NavLink>
                    </Grid>
                ))}
            </Grid>
            <Box style={{ marginLeft: isOpen ? "10px" : "10px" }} >
                <IconButton onClick={toggle} size="large">
                    <RiMenu2Line className="bars" />
                </IconButton>
            </Box>
        </Box>
           
           <main>{children}</main>
           </>
    );
};

export default Sidebar;