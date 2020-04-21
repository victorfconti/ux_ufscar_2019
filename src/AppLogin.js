import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
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
                         <h2>Login</h2>
                         <TextField id="standard-basic" label="Usuário" />
                         <p/>
                         <TextField label="Senha"  type="password"/>
                         <p/>
                         <Button style={{width: "220px"}} variant="contained" color="primary">Login</Button>
                     </div>
                 </main>
        </div>
        // <div className={classes.root}>
        //     <CssBaseline/>
        //     <SearchAppBar open={open} setOpen={setOpen}>
        //     </SearchAppBar>
        //     <main
        //         className={clsx(classes.content, {
        //             [classes.contentShift]: open,
        //         })}
        //     >
        //         <div className={classes.drawerHeader}/>
        //         <Breadcrumbs aria-label="breadcrumb">
        //             <Typography color="textPrimary">Acessibilidade</Typography>
        //         </Breadcrumbs>
        //         <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
        //             <h1>Acessibilidade</h1>
        //         </div>
        //         <Typography paragraph>
        //             Nosso projeto tem como finalidade prover uma plataforma onde os interessados no desenvolvimento de
        //             interfaces para o usuário possam estudar e se atualizar, de uma maneira prática e divertira, que
        //             une a teoria a prática.
        //         </Typography>
        //         <Typography paragraph>
        //             Para isso possuimos nossa seção de exemplo, onde iremos mostrar exemplos de criação de partes de
        //             um sistema. Exibindo seu resultado final, e o código de cada componente, além de explicações
        //             sobre as diretivas.
        //         </Typography>
        //         <Typography paragraph>
        //             Por fim temos uma sessão inteira voltada a dicas de acessibilidade que você pode usar no seu
        //             sistema, aumentando assim a experiencia do usuário e contemplando milhares de novos usuários.
        //         </Typography>
        //     </main>
        // </div>
    );
}

export default AppLogin;
