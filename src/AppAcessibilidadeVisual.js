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

function AppAcessibilidadeVisual() {
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
                    <Link color="inherit" href="/acessibilidade">
                        Acessibilidade
                    </Link>
                    <Typography color="textPrimary">Visual</Typography>
                </Breadcrumbs>
                <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
                    <h1>Acessibilidade Visual</h1>
                </div>
                <Typography paragraph>
                    Pessoas com problemas de visão, dificuldades para ler ou temporariamente não conseguem ler podem usar um leitor de tela.
                    Os leitores de tela verbalizarão o conteúdo visível e o lerão em voz alta.
                    O texto do parágrafo e botão, bem como o conteúdo oculto, como texto alternativo para ícones e títulos, são identificados pelo programa.
                    O conteúdo pode ser rotulado para otimizar a experiência daqueles que usam leitores de tela ou experimentam uma versão somente
                    texto da sua interface do usuário.
                </Typography>
                <Typography paragraph>
                    O texto alternativo “atributo alt em uma tag html” ajuda a converter uma interface visual em uma interface baseada em texto.
                    O texto alternativo é um rótulo curto (até 125 caracteres) no código que descreve uma imagem para usuários que não conseguem vê-los.
                    Um leitor de tela lerá o texto alternativo em voz alta no lugar da imagem.
                    Inclua palavras-chave específicas para ajudar a informar o usuário sobre a imagem.
                    Palavras-chave também podem melhorar a otimização de mecanismo de busca.
                </Typography>
                <h4>Dica</h4>
                <p style={{font: "smaller"}}>
                    Quando o texto visível e o não visível é descritivo e significativo, ajuda os usuários a navegar usando títulos ou links em uma tela.
                    Um leitor de tela pode ajudá-lo a testar o texto de acessibilidade e identificar lugares onde você pode adicioná-lo.
                </p>
            </main>
        </div>
    );
}

export default AppAcessibilidadeVisual;
