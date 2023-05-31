import React from 'react';
import { Menu } from "@mui/icons-material"
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 320;
const navItems = [
    {
        name: 'Videos',
        path: '/'
    },
    {
        name: 'Material didáctico de apoyo',
        path: '/material-didactico'
    },
    {
        name: 'Asesoría',
        path: '/asesoria'
    },
    {
        name: 'Libros recomendados',
        path: '/libros-recomendados'
    }
]

function Layout({ children }) {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 2 }} color='#fff'>
                World Creative
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton >
                        <Typography variant="h6" sx={{ my: 2 }} color='#fff'>
                            SECCIONES
                        </Typography>
                    </ListItemButton>
                </ListItem>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left', paddingLeft: 5 }} >
                            <Link to={item.path} style={{ color: '#fff', textDecoration: 'none' }} >{item.name}</Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ backgroundColor: '#000' }}  >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        /* sx={{ mr: 2, display: { sm: 'none' } }} */
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, marginLeft: 'calc(50% - 80px)' }}
                        >
                            World Creative
                        </Typography>
                        {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box> */}
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#212424' },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default Layout
