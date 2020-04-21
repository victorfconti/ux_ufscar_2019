import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AppSearch from './AppSearch'
import AppAcessibilidade from './AppAcessibilidade'
import AppAcessibilidadeVisual from "./AppAcessibilidadeVisual";
import AppAcessibilidadeAuditiva from "./AppAcessibilidadeAuditiva";
import AppLogin from "./AppLogin";
import AppExemplo from "./AppExemplo";
import AppTODO from "./AppTODO";
import AppContato from "./AppContato";
import AppSobre from "./AppSobre";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/search" exact={true} component={AppSearch}/>
            <Route path="/acessibilidade" exact={true} component={AppAcessibilidade}/>
            <Route path="/acessibilidade/visual" exact={true} component={AppAcessibilidadeVisual}/>
            <Route path="/acessibilidade/auditiva" exact={true} component={AppAcessibilidadeAuditiva}/>
            <Route path="/exemplo" exact={true} component={AppExemplo}/>
            <Route path="/exemplo/login" exact={true} component={AppLogin}/>
            <Route path="/exemplo/cadastro" exact={true} component={AppTODO}/>
            <Route path="/exemplo/consulta" exact={true} component={AppTODO}/>
            <Route path="/exemplo/grafico" exact={true} component={AppTODO}/>
            <Route path="/contato" exact={true} component={AppContato}/>
            <Route path="/sobre" exact={true} component={AppSobre}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
