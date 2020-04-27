import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        nested: {
            paddingLeft: theme.spacing(4),
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: - drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
        textAlign: 'center'
    },
    a: {
        color: "#0375B4",
        textDecoration: "none",
    },
    "a:visited": {
        color: "#061DC2",
        textDecoration: "none",
    }
}));

function AppAcessibilidade() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(window.innerWidth > 760);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <SearchAppBar open={open} setOpen={setOpen} menua_item={7}/>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        Início
                    </Link>
                    <Typography color="textPrimary">Acessibilidade</Typography>
                </Breadcrumbs>
                <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
                    <h1>Acessibilidade</h1>
                </div>
                <Typography paragraph>
                    A acessibilidade permite que usuários de diversas habilidades naveguem, entendam e usem sua interface.
                    Melhorar a acessibilidade do seu produto pode melhorar a usabilidade de todos os usuários, incluindo aqueles com baixa visão, cegueira, deficiência auditiva, cognitiva, motora ou situacional.
                </Typography>
                <h3>
                    Referencial
                </h3>
                <a class={classes.a} style={{font: "smaller"}} href="https://material.io/design/usability/accessibility.html" target="_blank">Ministério da educação</a>

            </main>
        </div>
    );
}

export default AppAcessibilidade;
