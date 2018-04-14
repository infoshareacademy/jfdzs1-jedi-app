import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import App from './App';
import WorldMap from './routes/world.currency.map/world.currency.map.component';
import SearchItem from './routes/search/search.component';
import Favorites from './routes/favorites/favorites.component';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
            <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/map" component={WorldMap} />
            <Route path="/search" component={SearchItem} />
            <Route path="/favorites" component={Favorites} />
        </div>
    </BrowserRouter>,
        document.getElementById('root'),
        registerServiceWorker()
    );

