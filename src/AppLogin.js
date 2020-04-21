import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import HelpIcon from '@material-ui/icons/Help';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {useMediaQuery} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';

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

function AppLogin() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(window.innerWidth > 760);
    const [openDialogTitle, setOpenDialogTitle] = React.useState(false);
    const [openDialogUsuario, setOpenDialogUsuario] = React.useState(false);
    const [openDialogSenha, setOpenDialogSenha] = React.useState(false);
    const [openDialogLogin, setOpenDialogLogin] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpenDialogTitle = () => {
        setOpenDialogTitle(true);
    };

    const handleCloseDialogTitle = () => {
        setOpenDialogTitle(false);
    };

    const handleClickOpenDialogUsuario = () => {
        setOpenDialogUsuario(true);
    };

    const handleCloseDialogUsuario = () => {
        setOpenDialogUsuario(false);
    };

    const handleClickOpenDialogSenha = () => {
        setOpenDialogSenha(true);
    };

    const handleCloseDialogSenha = () => {
        setOpenDialogSenha(false);
    };

    const handleClickOpenDialogLogin = () => {
        setOpenDialogLogin(true);
    };

    const handleCloseDialogLogin = () => {
        setOpenDialogLogin(false);
    };


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
                     <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
                         <h2>Login <HelpIcon onClick={handleClickOpenDialogTitle} style={{cursor: "pointer"}} color="primary" /></h2>
                         <Dialog
                             fullScreen={fullScreen}
                             open={openDialogTitle}
                             onClose={handleCloseDialogTitle}
                             aria-labelledby="responsive-dialog-title"
                         >
                             <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                             <DialogContent>
                                 <DialogContentText>
                                     Let Google help apps determine location. This means sending anonymous location data to
                                     Google, even when no apps are running.
                                 </DialogContentText>
                             </DialogContent>
                             <DialogActions>
                                 <Button autoFocus onClick={handleCloseDialogTitle} color="primary">
                                     Fechar
                                 </Button>
                             </DialogActions>
                         </Dialog>
                         <TextField id="standard-basic" label="Usuário" />
                         <HelpIcon onClick={handleClickOpenDialogUsuario} style={{cursor: "pointer"}} color="primary" />
                         <Dialog
                             fullScreen={fullScreen}
                             open={openDialogUsuario}
                             onClose={handleCloseDialogUsuario}
                             aria-labelledby="responsive-dialog-title"
                         >
                             <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                             <DialogContent>
                                 <DialogContentText>
                                     Let Google help apps determine location. This means sending anonymous location data to
                                     Google, even when no apps are running.
                                 </DialogContentText>
                             </DialogContent>
                             <DialogActions>
                                 <Button autoFocus onClick={handleCloseDialogUsuario} color="primary">
                                     Fechar
                                 </Button>
                             </DialogActions>
                         </Dialog>
                         <p/>
                         <TextField label="Senha"  type="password"/>
                         <HelpIcon onClick={handleClickOpenDialogSenha} style={{cursor: "pointer"}} color="primary" />
                         <Dialog
                             fullScreen={fullScreen}
                             open={openDialogSenha}
                             onClose={handleCloseDialogSenha}
                             aria-labelledby="responsive-dialog-title"
                         >
                             <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                             <DialogContent>
                                 <DialogContentText>
                                     Let Google help apps determine location. This means sending anonymous location data to
                                     Google, even when no apps are running.
                                 </DialogContentText>
                             </DialogContent>
                             <DialogActions>
                                 <Button autoFocus onClick={handleCloseDialogSenha} color="primary">
                                     Fechar
                                 </Button>
                             </DialogActions>
                         </Dialog>
                         <p/>
                         <Button style={{width: "220px"}} variant="contained" color="primary">Login</Button>
                         <HelpIcon onClick={handleClickOpenDialogLogin} style={{cursor: "pointer"}} color="primary" />
                         <Dialog
                             fullScreen={fullScreen}
                             open={openDialogLogin}
                             onClose={handleCloseDialogLogin}
                             aria-labelledby="responsive-dialog-title"
                         >
                             <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                             <DialogContent>
                                 <DialogContentText>
                                     Let Google help apps determine location. This means sending anonymous location data to
                                     Google, even when no apps are running.
                                 </DialogContentText>
                             </DialogContent>
                             <DialogActions>
                                 <Button autoFocus onClick={handleCloseDialogLogin} color="primary">
                                     Fechar
                                 </Button>
                             </DialogActions>
                         </Dialog>

                     </div>
                 </main>
        </div>
    );
}

export default AppLogin;
