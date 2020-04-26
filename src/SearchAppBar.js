import React from 'react';
import clsx from 'clsx';
import {fade, makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Rux from "./assets/RUX.svg"
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InfoIcon from '@material-ui/icons/Info';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function SearchAppBar({open, setOpen, menua_item}) {
    const classes = useStyles();
    const theme = useTheme();
    const [openSistema, setOpenSistema] = React.useState(menua_item >=2 && menua_item <= 6);
    const [openAcessibilidade, setOpenAcessibilidade] = React.useState(menua_item >= 7);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const redirectHome = () => {
        window.location.href = "/";
    }

    const redirectSearch = (event) => {
        if (event.key === 'Enter') {
            window.location.href = "/search";
        }
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSistemaDrawOpen = () => {
        setOpenSistema(!openSistema);
    }

    const handleAcessibilidadeDrawOpen = () => {
        setOpenAcessibilidade(!openAcessibilidade);
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={()=>window.location.href="/contato"} >
                <IconButton aria-label="contato" color="inherit">
                    <MailIcon/>
                </IconButton>
                <p>Contato</p>
            </MenuItem>
            <MenuItem onClick={()=>window.location.href="/sobre"}>
                <IconButton aria-label="sobre" color="inherit">
                    <InfoIcon/>
                </IconButton>
                <p>Sobre</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        color="inherit"
                        onClick={handleDrawerOpen}
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img style={{cursor: "pointer"}} onClick={redirectHome} src={Rux} alt={"Logotipo formulado utilizado as iniciais de Real User Experiencie onde o X representa a junção do usuário ao mundo real"} height={50}/>
                    <Typography className={classes.title} variant="h6" noWrap>
                        &nbsp;&nbsp;UX DO MUNDO REAL
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            onKeyPress={redirectSearch}
                            placeholder="Pesquisar…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton onClick={()=>window.location.href="/contato"} aria-label="Contato" color="inherit" placeholder={"Contato"}>
                           <MailIcon/>
                        </IconButton>
                        <IconButton onClick={()=>window.location.href="/sobre"} aria-label="Sobre" color="inherit" placeholder={"Sobre"}>
                            <InfoIcon/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List component="div">
                    <ListItem style={{backgroundColor: menua_item===1?"#dadee3":"inherit"}} onClick={() => window.location.href = "/"} button>
                        <ListItemText primary="Início"/>
                    </ListItem>
                </List>
                <ListItem button onClick={handleSistemaDrawOpen}>
                    <ListItemText primary="Sistema"/>
                    {openSistema ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={openSistema} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem style={{backgroundColor: menua_item===2?"#dadee3":"inherit"}} onClick={() => window.location.href = "/sistema"} button className={classes.nested}>
                            <ListItemText primary="Módulos"/>
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem style={{backgroundColor: menua_item===3?"#dadee3":"inherit"}} onClick={() => window.location.href = "/sistema/login"} button
                                  className={classes.nested}>
                            <ListItemText primary="Login"/>
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem style={{backgroundColor: menua_item===4?"#dadee3":"inherit"}} onClick={() => window.location.href = "/sistema/cadastro"} button
                                  className={classes.nested}>
                            <ListItemText primary="Cadastro"/>
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem style={{backgroundColor: menua_item===5?"#dadee3":"inherit"}} onClick={() => window.location.href = "/sistema/consulta"} button
                                  className={classes.nested}>
                            <ListItemText primary="Consulta"/>
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem style={{backgroundColor: menua_item===6?"#dadee3":"inherit"}} onClick={() => window.location.href = "/sistema/grafico"} button
                                  className={classes.nested}>
                            <ListItemText primary="Gráfico"/>
                        </ListItem>
                    </List>
                </Collapse>
                
                <ListItem button onClick={handleAcessibilidadeDrawOpen}>
                    <ListItemText primary="Acessibilidade"/>
                    {openAcessibilidade ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={openAcessibilidade} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem style={{backgroundColor: menua_item===7?"#dadee3":"inherit"}} onClick={() => window.location.href = '/acessibilidade'} button
                                  className={classes.nested}>
                            <ListItemText primary="Geral"/>
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem style={{backgroundColor: menua_item===8?"#dadee3":"inherit"}} onClick={() => window.location.href = '/acessibilidade/visual'} button
                                  className={classes.nested}>
                            <ListItemText primary="Visual"/>
                        </ListItem>
                    </List>
                    <List component="div" disablePadding>
                        <ListItem style={{backgroundColor: menua_item===9?"#dadee3":"inherit"}} onClick={() => window.location.href = '/acessibilidade/auditiva'} button
                                  className={classes.nested}>
                            <ListItemText primary="Auditiva"/>
                        </ListItem>
                    </List>
                </Collapse>
            </Drawer>
        </div>
    );
}
