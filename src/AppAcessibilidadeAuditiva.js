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

}));

function AppAcessibilidadeAuditiva() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(window.innerWidth > 760);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <SearchAppBar open={open} setOpen={setOpen} menua_item={9}/>
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
                    <Link color="inherit" href="/acessibilidade">
                        Acessibilidade
                    </Link>
                    <Typography color="textPrimary">Auditiva</Typography>
                </Breadcrumbs>
                <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
                    <h2>Acessibilidade Auditiva</h2>
                </div>
                <Typography paragraph>
                   Para muitos desenvolvedores, acessibilidade consiste em aderir a algumas orientações que garantam a 
                   acessibilidade aos Leitores de Tela. Até certo ponto isto pode ser compreensível. Usuário com 
                   problemas visuais podem ter a maior parte dos problemas resolvidos, porem essas informações 
                   podem ser apresentadas ainda em forma de vídeos, áudio e animações.
                </Typography>
                <Typography paragraph>
                   Atualmente já existe uma grande quantidade de conteúdo em vídeo disponível na maioria dos portais de 
                   entretenimento do mundo, infelizmente para aqueles que são surdos, este conteúdo sem uma legenda é 
                   inacessível. As ferramentas para legendar vídeos para internet existem, e os conceitos sobre o uso 
                   de legendas também já existe a décadas inclusive é requerida por lei em alguns países.
                </Typography>
            </main>
        </div>
    );
}

export default AppAcessibilidadeAuditiva;
