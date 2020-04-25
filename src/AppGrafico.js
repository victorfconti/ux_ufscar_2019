import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
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
}));

function AppGrafico() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(window.innerWidth > 760);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <SearchAppBar open={open} setOpen={setOpen}>
            </SearchAppBar>
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
                         <Link color="inherit" href="/sistema">
                             Sistema
                         </Link>
                         <Typography color="textPrimary">Gráfico</Typography>
                     </Breadcrumbs>

                     <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
                         <h2>Gráfico</h2>
                         <p>Essa funcionalidade será implementada na próxima versão</p>
                     </div>
                 </main>
        </div>
    );
}

export default AppGrafico;
