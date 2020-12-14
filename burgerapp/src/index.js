import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducers/burgerBuilder';
import { reduxDevTools } from './store/reduxTools';
import thunk from 'redux-thunk';


// const rootReducer = combineReducers({
//     ingredients: reducer
// });


const logger = store => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE] Dispatching', action);
            const result = next(action);
            console.log('[MIDDLEWARE] next state', store.getState());
            return result;
        }
    }
};

const reduxEnhancers = compose(applyMiddleware(thunk), reduxDevTools);


const store = createStore(
    reducer,
    reduxEnhancers
    );


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
