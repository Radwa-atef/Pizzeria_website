import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Resgestration from './regestration/regestration';
import reportWebVitals from './reportWebVitals';
import {i18n } from 'element-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import locale from 'element-react/src/locale/lang/en'
i18n.use(locale);
ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} /> 
    <Route  path="/SignUp" component={Resgestration} /> 
    </Switch>
    </BrowserRouter>
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
