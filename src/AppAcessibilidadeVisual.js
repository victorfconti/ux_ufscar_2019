import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {ZoomOut, ZoomIn} from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";
import InfoIcon from '@material-ui/icons/Info';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {useMediaQuery} from "@material-ui/core";

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

function AppAcessibilidadeVisual() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(window.innerWidth > 760);
    const [value, setValue] = React.useState(1);
    const [openDialogZoom, setOpenDialogZoom] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClickOpenDialogZoom = () => {
        setOpenDialogZoom(true);
    };

    const handleCloseDialogZoom = () => {
        setOpenDialogZoom(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const content_div = document.getElementById('content');
        content_div.style.fontSize = newValue+ 'rem';
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <SearchAppBar open={open} setOpen={setOpen} menua_item={8}>
            </SearchAppBar>
            <main
                id={'content'}
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
                    <Typography color="textPrimary">Visual</Typography>
                </Breadcrumbs>
                <Grid container spacing={2}>
                    <Grid item>
                        <ZoomOut />
                    </Grid>
                    <Grid item xs>
                        <Slider min={1} max={10} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <ZoomIn />
                    </Grid>
                    <Grid>
                        <InfoIcon onClick={handleClickOpenDialogZoom}
                                  style={{ cursor: "pointer" }}
                                  color="primary"/>
                    </Grid>
                </Grid>
                <Dialog
                    fullScreen={fullScreen}
                    open={openDialogZoom}
                    onClose={handleCloseDialogZoom}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Usuário"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <h3>Código</h3>
                            <pre>
                                <code>
                                    {'const [value, setValue] = React.useState(1);'}
                                    <br/>
                                    {'const handleChange = (event, newValue) => {'}
                                    <br/>
                                    {'    setValue(newValue);'}
                                    <br/>
                                    {'    const content_div = document.getElementById(\'content\');'}
                                    <br/>
                                    {'    content_div.style.fontSize = newValue+ \'rem\';'}
                                    <br/>
                                    {'};'}
                                    <br/>
                                    {'<Grid container spacing={2}>'}
                                    <br/>
                                    {'<Grid item>'}
                                    <br/>
                                    {'<ZoomOut />'}
                                    <br/>
                                    {'</Grid>'}
                                    <br/>
                                    {'<Grid item xs>'}
                                    <br/>
                                    {'<Slider min={1} max={10} value={value} onChange={handleChange} aria-labelledby=\'continuous-slider\' />'}
                                    <br/>
                                    {'</Grid>'}
                                    <br/>
                                    {'<Grid item>'}
                                    <br/>
                                    {'<ZoomIn />'}
                                    <br/>
                                    {'</Grid>'}
                                    <br/>
                                    {'<Grid>'}
                                    <br/>
                                    {'<InfoIcon onClick={handleClickOpenDialogZoom}'}
                                    <br/>
                                    {'style={{ cursor: &quot;pointer&quot; }}'}
                                    <br/>
                                    {'color=&quot;primary&quot;/>'}
                                    <br/>
                                    {'</Grid>'}
                                    <br/>
                                    {'</Grid>'}
                                </code>
                            </pre>
                            <h3>Diretiva</h3>
                            <p>
                                Utilize alguma forma para permitir pessoas com deficiência de zoom no seu texto.
                            </p>
                            <h3>Fonte</h3>
                            <a class={classes.a} href={"https://material.io/design/usability/accessibility.html/"} target={"_blank"}>Referência</a>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            autoFocus
                            onClick={handleCloseDialogZoom}
                            color="primary"
                        >
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>

                <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
                    <h2>Acessibilidade Visual</h2>
                </div>
                <p>
                    Pessoas com problemas de visão, dificuldades para ler ou temporariamente não conseguem ler podem usar um leitor de tela.
                    Os leitores de tela verbalizarão o conteúdo visível e o lerão em voz alta.
                    O texto do parágrafo e botão, bem como o conteúdo oculto, como texto alternativo para ícones e títulos, são identificados pelo programa.
                    O conteúdo pode ser rotulado para otimizar a experiência daqueles que usam leitores de tela ou experimentam uma versão somente
                    texto da sua interface do usuário.
                </p>
                <p>
                    O texto alternativo “atributo alt em uma tag html” ajuda a converter uma interface visual em uma interface baseada em texto.
                    O texto alternativo é um rótulo curto (até 125 caracteres) no código que descreve uma imagem para usuários que não conseguem vê-los.
                    Um leitor de tela lerá o texto alternativo em voz alta no lugar da imagem.
                    Inclua palavras-chave específicas para ajudar a informar o usuário sobre a imagem.
                    Palavras-chave também podem melhorar a otimização de mecanismo de busca.
                </p>
                <p>
                    Para muitos desenvolvedores, acessibilidade consiste em aderir a algumas orientações que garantam a acessibilidade aos Leitores de Tela.
                    Até certo ponto isto pode ser compreensível. Usuário com problemas visuais podem ter a maior parte dos problemas resolvidos,
                    porem essas informações podem ser apresentadas ainda em forma de vídeos, áudio e animações.
                    Atualmente já existe uma grande quantidade de conteúdo em vídeo disponível na maioria dos portais de entretenimento do mundo,
                    infelizmente para aqueles que são surdos, este conteúdo sem uma legenda é inacessível. As ferramentas para legendar vídeos para internet existem,
                    e os conceitos sobre o uso de legendas também já existe a décadas inclusive é requerida por lei em alguns países.
                </p>
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
