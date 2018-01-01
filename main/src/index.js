import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, } from 'react-router-dom';
import './index.css';
import App from './App';
// import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

const Main = () => (
    <main>
    <Switch>
      <Route path="/" component={App} />

    </Switch>
    </main>
);

ReactDOM.render(<HashRouter>
    <Main />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
