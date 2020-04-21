import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

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

function AppSearch() {
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

                <Typography paragraph style={{"border-radius": "10px", background: "#F5F5F5", padding: "10px"}}>
                    <a href="/login">Login</a><br/>
                    <text style={{fontSize: "smaller"}}>Um exemplo de implementação de um sistema de login</text>
                </Typography>
                <Typography paragraph style={{"border-radius": "10px", background: "#F5F5F5", padding: "10px"}}>
                    <a href="/usuabilidade">Usabilidade</a><br/>
                    <text style={{fontSize: "smaller"}}>Conceitos gerais sobre usabilidade</text>
                </Typography>
                <Typography paragraph style={{"border-radius": "10px", background: "#F5F5F5", padding: "10px"}}>
                    <a href="/usabilidade/visual">Deficiencia visual</a><br/>
                    <text style={{fontSize: "smaller"}}>Guidelines para criação de sistemas adaptados para usuários com deficiencias visuais</text>
                </Typography>
                <Typography paragraph style={{"border-radius": "10px", background: "#F5F5F5", padding: "10px"}}>
                    <a href="/usabilidade/auditiva">Deficiencia auditiva</a><br/>
                    <text style={{fontSize: "smaller"}}>Guidelines para criação de sistemas adaptados para usuários com deficiencias auditiva</text>
                </Typography>
            </main>
        </div>
    );
}

export default AppSearch;
