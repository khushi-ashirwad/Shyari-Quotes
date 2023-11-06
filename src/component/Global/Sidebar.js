import React, { useState } from 'react';
import { FaQuoteRight, } from "react-icons/fa";
import { FiList } from "react-icons/fi"
import { HiAdjustments } from "react-icons/hi"
import { CiImageOn } from "react-icons/ci"
import { PiCirclesFourLight, PiDiamondsFourThin } from "react-icons/pi"
import { GiClapperboard } from "react-icons/gi"
import { BsChatQuote } from "react-icons/bs"
import { RiMenu2Line, RiBarChartGroupedFill, RiLogoutCircleRLine } from "react-icons/ri"
import { NavLink } from 'react-router-dom';
import logo_img from "../../images/Group 49110.png"
import "../../Style/Sidebar.css"
import { Box, Grid, IconButton } from '@mui/material';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState("/");
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <RiBarChartGroupedFill />
        },
        {
            path: "/Quotes",
            name: "Quotes ",
            icon: <BsChatQuote />
        },
        {
            path: "/Today Quotes",
            name: "Today Quotes",
            icon: <FaQuoteRight />
        },
        {
            path: "/Category",
            name: " Quotes Category",
            icon: <PiCirclesFourLight />
        },
     
        {
            path: "/Shayari",
            name: "Shayari",
            icon: <HiAdjustments />
        },
        {
            path: "/Today Shayari",
            name: "Today Shayari",
            icon: <RiLogoutCircleRLine />
        },
        {
            path: "/Shayari Category",
            name: "Shayari Category",
            icon: <FiList />
        },
        {
            path: "/Image",
            name: "Image",
            icon: <CiImageOn />
        },
        {
            path: "/Image Category",
            name: "Image Category",
            icon: <PiDiamondsFourThin />
        },
        {
            path: "/Manage Ads",
            name: "Manage Ads",
            icon: <GiClapperboard />,
            subMenu: [
                {
                    path: "/Manage Ads/ios",
                    name: "ios",
                },
                {
                    path: "/Manage Ads/android ",
                    name: "android ",
                },
            ],
        },
    ]
    return (
        <>
            <Box>
                <Box sx={{ width: isOpen ? "250px" : "85px" }} className="sidebar">
                    <Box className="top_section">
                        <img src={logo_img} style={{ width: isOpen ? "180px" : "80px", padding: isOpen ? "2rem" : "2rem 1rem " }} alt='logo'></img>
                    </Box>
                    <Grid container direction="column" spacing={0}>
                        {menuItem.map((item, index) => (
                            <Grid item key={index}>
                                <NavLink
                                    to={item.path}
                                    className={`sidebar-menu ${item.path === activeMenuItem ? "active" : ""}`}
                                    onClick={() => setActiveMenuItem(item.path)}
                                >
                                    <Grid container alignItems="center" spacing={2}>
                                        <Grid item className="icon">
                                            {item.icon}
                                        </Grid>
                                        <Grid item component={Box} sx={{ display: isOpen ? "block" : "none" }} >
                                            {item.name}
                                        </Grid>
                                        {item.subMenu && (
                                            <ul>
                                                {item.subMenu.map((value,index)=>(
                                                    <li>{value.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </Grid>
                                </NavLink>
                            </Grid>
                        ))}
                    </Grid>
                    <Box style={{ marginLeft: isOpen ? "8px" : "8px" }} >
                        <IconButton onClick={toggle} size="large">
                            <RiMenu2Line  style={{color:"#fff"}}/>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <main>{children}</main>
        </>
    );
};

export default Sidebar;