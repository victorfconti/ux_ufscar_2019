import React from "react";
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import HelpIcon from '@material-ui/icons/Info';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    nested: {
      paddingLeft: theme.spacing(4),
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
    textAlign: "center",
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

function AppLogin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(window.innerWidth > 760);
  const [openDialogTitle, setOpenDialogTitle] = React.useState(false);
  const [openDialogUsuario, setOpenDialogUsuario] = React.useState(false);
  const [openDialogSenha, setOpenDialogSenha] = React.useState(false);
  const [openDialogLogin, setOpenDialogLogin] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      <CssBaseline />
      <SearchAppBar open={open} setOpen={setOpen} menua_item={3}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Início
          </Link>
          <Link color="inherit" href="/sistema">
            Sistema
          </Link>
          <Typography color="textPrimary">Login</Typography>
        </Breadcrumbs>
        <div
          style={{
            align: "center",
            alignSelf: "center",
            alignContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <h2>
            Login{" "}
            <HelpIcon
              onClick={handleClickOpenDialogTitle}
              style={{ cursor: "pointer" }}
              color="primary"
            />
          </h2>
          <Dialog
            fullScreen={fullScreen}
            open={openDialogTitle}
            onClose={handleCloseDialogTitle}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">{"Titulo"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <h3>Código</h3>
                <code>&lt;h2&gt;Login&lt;/h2&gt;</code>
                <h3>Diretiva</h3>
                <p>Descrição simples e intuitiva.</p>
                <h3>Fonte</h3>
                <a style={classes.a} href={"https://material.io/components/text-fields/"} target={"_blank"}>Referência</a>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleCloseDialogTitle}
                color="primary"
              >
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
          <TextField id="usuario_txt" tabIndex={1} label="Usuário" />
          <HelpIcon
            onClick={handleClickOpenDialogUsuario}
            style={{ cursor: "pointer" }}
            color="primary"
          />
          <Dialog
            fullScreen={fullScreen}
            open={openDialogUsuario}
            onClose={handleCloseDialogUsuario}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">{"Usuário"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <h3>Código</h3>
                <code>
                  &lt;TextField id=&quot;usuario_txt&quot; tabIndex={1}{" "}
                  label=&quot;Usu&aacute;rio&quot; /&gt;
                </code>
                <h3>Diretiva</h3>
                <p>
                  Utilize uma boa descrição posicionada acima do campo no lado
                  esquerdo, além de um tab index com a posição do campo.
                </p>
                <h3>Fonte</h3>
                <a style={classes.a} href={"https://material.io/components/text-fields/"} target={"_blank"}>Referência</a>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleCloseDialogUsuario}
                color="primary"
              >
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
          <p />
          <TextField
            id={"senha_field"}
            tabIndex={2}
            label="Senha"
            type="password"
          />
          <HelpIcon
            onClick={handleClickOpenDialogSenha}
            style={{ cursor: "pointer" }}
            color="primary"
          />
          <Dialog
            fullScreen={fullScreen}
            open={openDialogSenha}
            onClose={handleCloseDialogSenha}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">{"Senha"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <h3>Código</h3>
                <code>
                  &lt;TextField id=&quot;senha_field&quot; tabIndex={2}{" "}
                  label=&quot;Senha&quot; type=&quot;password&quot;/&gt;
                </code>
                <h3>Diretiva</h3>
                <p>
                  Utilize uma boa descrição posicionada acima do campo no lado
                  esquerdo, além de um tab index com a posição do campo, e o
                  tipo de campo password, para manter a senha oculta.
                </p>
                <h3>Fonte</h3>
                <a style={classes.a} href={"https://material.io/components/text-fields/"} target={"_blank"}>Referência</a>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleCloseDialogSenha}
                color="primary"
              >
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
          <p />
          <Button
            id="login_btt"
            style={{ width: "220px" }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <HelpIcon
            onClick={handleClickOpenDialogLogin}
            style={{ cursor: "pointer" }}
            color="primary"
          />
          <Dialog
            fullScreen={fullScreen}
            open={openDialogLogin}
            onClose={handleCloseDialogLogin}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">{"Login"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <h3>Código</h3>
                <code>
                  &lt;Button id=&quot;login_btt&quot;
                  variant=&quot;contained&quot;
                  color=&quot;primary&quot;&gt;Login&lt;/Button&gt;
                </code>
                <h3>Diretiva</h3>
                <p>
                  Utilize um botão na parte inferior do formulário, porém evite
                  um botão de limpar, para tornar o visual mais simples e evitar
                  funções desnecessárias.
                </p>
                <h3>Fonte</h3>
                <a style={classes.a} href={"https://material.io/components/buttons"} target={"_blank"}>Referência</a>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleCloseDialogLogin}
                color="primary"
              >
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
