import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import {sections, programs} from './helpers';

import { BrowserRouter as Router} from 'react-router-dom';

export const initialState = {
  selected_section: sections.About,
  selected_program: null,
  program_image: "Images/Language.jpg"
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
