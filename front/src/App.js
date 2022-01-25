import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './config/store'
import './css/meu.css'

import Rotas from './rotas/Rotas'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Fragment >
          <Rotas />
        </Fragment>
      </Provider>
    </Router>
  );
}

export default App
