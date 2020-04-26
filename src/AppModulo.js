import React from "react";
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Examples from "./assets/examples.jpg";
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
}));

function AppModulo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(window.innerWidth > 760);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SearchAppBar open={open} setOpen={setOpen} menua_item={2}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Breadcrumbs aria-label="breadcrumb">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Início
            </Link>
            <Link color="inherit" href="/sistema">
              Sistema
            </Link>
            <Typography color="textPrimary">Módulos</Typography>
          </Breadcrumbs>
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
          <h2>Módulos</h2>
          <p>
            Você poderá navegar no sistema e visualizar seu código para análisar
            a implementação, importante realizar as etapas na sequencia proposta
          </p>
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <div
              style={{
                textAlign: "justify",
                width: window.innerWidth < 760 ? "100%" : "50%",
              }}
            >
              <div>
                <i className="bx bx-shield"></i>
                <h4>
                  <a href="/sistema/login">1 - Login</a>
                </h4>
                <p>
                  Fazer a autenticação para usar um determinado sistema ou
                  serviço. O login é feito com o nome de usuário e com a senha
                  que foi escolhida
                </p>
              </div>
              <div>
                <i className="bx bx-receipt"></i>
                <h4>
                  <a href="/sistema/cadastro">2 - Cadastro</a>
                </h4>
                <p>
                  Refere-se a qualquer registro detalhado de entidades,
                  normalmente pessoas: clientes de uma empresa ou
                  estabelecimento comercial, alunos de uma escola,
                  frequentadores de uma biblioteca etc...
                </p>
              </div>
              <div>
                <i className="bx bx-cube-alt"></i>
                <h4>
                  <a href="/sistema/consulta">3 - Consulta</a>
                </h4>
                <p>
                  Método que permite ter acesso aos dados de uma base de dados e
                  realizar diversas ações com a informação.
                </p>
              </div>
              <div>
                <i className="bx bx-images"></i>
                <h4>
                  <a href="/sistema/grafico">4 - Gráfico</a>
                </h4>
                <p>
                  Representação geométrica de um conjunto de dados usada para
                  facilitar a compreensão das informações apresentadas nesse
                  conjunto. Gráficos ajudam a identificar padrões, verificar
                  resultados e comparar medidas de forma ágil.
                </p>
              </div>
            </div>
            <div
              style={{
                display: window.innerWidth < 760 ? "None" : "Block",
                width: "50%",
              }}
            >
              <img src={Examples} width={"500px"} alt={"Hora de começar a desenvolver vamos colocar as mãos na massa"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AppModulo;
