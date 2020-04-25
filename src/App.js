import React from 'react';
import SearchAppBar from "./SearchAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Rux from "./assets/RUX.svg"
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
    paragraph: {
        textAlign: 'justify'
    }
}));

function App() {
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
                  <img src={Rux} width='60px' height='60px' alt={"Logotipo formulado utilizado as iniciais de Real User Experiencie onde o X representa a junção do usuário ao mundo real"} />
                  <h2>Usabilidade do mundo real</h2>
              </div>
              <Typography paragraph align='justify'>
                  Este projeto tem como finalidade prover uma plataforma onde os Devs possam estudar e se 
                  atualizar de uma maneira única e divertida, que une teoria, prática e usabilidade.
              </Typography>
              <Typography paragraph align='justify'>
                  Para isso propomos uma didática diferente onde iremos mostrar um sistema operando e através 
                  da opção de ajuda acessar a implementação de cada componente.
              </Typography>
              <Typography paragraph align='justify'>
                  Além de diretivas de acessibilidade que devem ser aplicadas em seu sistema, que melhoram a 
                  experiência do usuário e diminuem a exclusão social seja ela temporária ou permanente.
              </Typography>
              <div style={{align: 'center', alignSelf: 'center', alignContent: "center", textAlign: "center", alignItems: "center"}}>
                  <Button onClick={()=> window.location.href="/sistema"} variant="contained" color="primary">Começar</Button>
              </div>
          </main>
      </div>
  );
}

export default App;
