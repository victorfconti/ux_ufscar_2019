import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
        marginLeft: -drawerWidth,
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

function AppContato() {
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
                <div style={{
                    align: 'center',
                    alignSelf: 'center',
                    alignContent: "center",
                    textAlign: "center",
                    alignItems: "center"
                }}>
                    <h1>Contato</h1>

                    <Typography paragraph>
                        Caso queira entrar em contato envie-nos uma mensagem pelo formulário abaixo.
                    </Typography>
                    <br/>
                    <TextField style={{width: "550px"}} label="Nome"/>
                    <br/>
                    <TextField style={{width: "550px"}} label="Email"/>
                    <br/>
                    <TextField style={{width: "550px"}} label="Assunto"/>
                    <br/>
                    <br/>
                    <TextField style={{width: "550px"}} label="Mensagem" multiline rows={10}/>
                    <br/>
                    <br/>
                    <Button style={{width: "550px"}} variant="contained" color="primary" href="#contained-buttons">Enviar</Button>

                </div>
            </main>
        </div>

)
    ;
}

export default AppContato;
