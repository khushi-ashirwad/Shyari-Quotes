import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiList } from 'react-icons/fi';
import { HiAdjustments } from 'react-icons/hi';
import { CiImageOn } from 'react-icons/ci';
import { PiCirclesFourLight, PiDiamondsFourThin } from 'react-icons/pi';
import { GiClapperboard } from 'react-icons/gi';
import { BsChatQuote } from 'react-icons/bs';
import { RiMenu2Line, RiBarChartGroupedFill, RiLogoutCircleRLine } from 'react-icons/ri';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';
import logo_img from '../../images/Group 49110.png';
import '../../Style/Sidebar.css';
import { Box, Grid, IconButton } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import DevicesIcon from '@mui/icons-material/Devices';
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const [openSubMenu, setOpenSubMenu] = useState('');
    const [activeSubMenuIndex,] = useState('');

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <RiBarChartGroupedFill />,
        },
        {
            name: "Quotes",
            icon: <BsChatQuote />,
            subMenu: [
                {
                    path: "/Quotes",
                    name: "Quotes",
                    icon: <BsChatQuote />,
                },

                {
                    path: "/Today Quotes",
                    name: "Today Quotes",
                    icon: <FaQuoteRight />,
                },
                {
                    path: "/Category",
                    name: "Quotes Category",
                    icon: <PiCirclesFourLight />,
                },
            ],
        },
        {
            name: "Shayari",
            icon: <HiAdjustments />,
            subMenu: [
                {
                    path: "/Shayari",
                    name: "Shayari",
                    icon: <HiAdjustments />,
                },
                {
                    path: "/Today Shayari",
                    name: "Today Shayari",
                    icon: <RiLogoutCircleRLine />,
                },
                {
                    path: "/Shayari Category",
                    name: "Shayari Category",
                    icon: <FiList />,
                }
            ],
        },
        {
            name: "Image",
            icon: <CiImageOn />,
            subMenu: [
                {
                    path: "/Image",
                    name: "Image",
                    icon: <CiImageOn />,
                },
                {
                    path: "/Image Category",
                    name: "Image Category",
                    icon: <PiDiamondsFourThin />,
                },

            ],
        },
        {
            name: "Manage Ads",
            icon: <GiClapperboard />,
            subMenu: [
                {
                    path: "/Manage Ads/ios",
                    name: "ios",
                    icon: <DevicesIcon />
                },
                {
                    path: "/Manage Ads/android",
                    name: "android",
                    icon: <AndroidIcon />

                },
            ],
        },
    ];
    console.log("hello",menuItem.subItem)

    const handleSubMenuClick = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };
    return (
        <>
            <Box>
                <Box sx={{ width: isOpen ? '250px' : '85px' }} className="sidebar">
                    <Box className="top_section">
                        <img src={logo_img} style={{ width: isOpen ? "180px" : "80px", padding: isOpen ? "2rem" : "2rem 1rem " }} alt='logo'></img>
                    </Box>
                    <Grid container direction="column" spacing={0}>

                        {menuItem.map((item, index) => (
                            <Grid item key={index}>
                                <div className={`sidebar-menu ${item.path === activeMenuItem ? 'active' : ''}`}
                                >
                                    <div
                                        className="menu-item"
                                        onClick={() => (item.subMenu ? handleSubMenuClick(index) : setActiveMenuItem(item.path))}
                                    >
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item className="icon">
                                                {item.icon}
                                            </Grid>
                                            <Grid item component={Box} sx={{ display: isOpen ? 'block' : 'none' }}>
                                                {item.name}
                                            </Grid>
                                            {item.subMenu && (
                                                <Grid item>
                                                    {openSubMenu === index ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                                                </Grid>
                                            )}
                                        </Grid>
                                    </div>

                                </div>

                                {item.subMenu && openSubMenu === index && (
                                    <ul >
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex} >
                                                <NavLink className={`submenu ${index === activeSubMenuIndex ? 'active' : ''}`} to={subItem.path} >
                                                    <Grid sx={{ padding: "0 1rem 0 0", fontSize: "1.1rem" }}>{subItem.icon}</Grid>
                                                    <Grid item component={Box} sx={{ display: isOpen ? 'block' : 'none' }}> {subItem.name}</Grid>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                    <Box style={{ marginLeft: isOpen ? "8px" : "8px", paddingTop: isOpen ? "12rem" : "14rem" }} >
                        <IconButton onClick={toggle} size="large">
                            <RiMenu2Line style={{ color: "#fff" }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <main>{children}</main>
        </>
    );
};

export default Sidebar;



