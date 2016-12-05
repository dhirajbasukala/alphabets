import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './js/components/AppRoutes'
import {AppContainer} from 'react-hot-loader';
import './styles/App.scss'

const render = () => {
    ReactDOM.render(
        <AppContainer>
                <AppRoutes/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render();


// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./js/components/AppRoutes', render);
}