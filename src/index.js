import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppRoutes from './js/components/AppRoutes';

import './styles/App.scss';
import rootReducer from './js/components/reducer';

const store = createStore(rootReducer);
const render = Root => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(AppRoutes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./js/components/AppRoutes', () => {
    const HotApp = require('./js/components/AppRoutes').default;
    render(HotApp);
  });
}
