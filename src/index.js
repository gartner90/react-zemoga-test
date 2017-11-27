import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import AppRoutes from './routes'

render(
	<Provider store={store}>
		<Router>
			<AppRoutes />
		</Router>
	</Provider>,
  document.getElementById('root')
);
