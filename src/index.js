import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WorldMap from './routes/world.currency.map/world.currency.map.component';
import SearchItem from './routes/search/search.component';
import Favorites from './routes/favorites/favorites.component';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/map" component={WorldMap} />
            <Route path="/search" component={SearchItem} />
            <Route path="/favorites" component={Favorites} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();