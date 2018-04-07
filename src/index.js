import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchItem from './routes/search/search.component';
import WorldMap from './routes/world.currency.map/world.currency.map.component';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/map" component={WorldMap} />
            <Route path="/search" component={SearchItem} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();