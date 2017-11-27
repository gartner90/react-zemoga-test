import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import PastTrials from './pages/PastTrials';
import Home from './pages/Home';
import How from './pages/How';
import Log from './pages/Log';

const AppRoutes = () => 
	<App>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/past-trials" component={PastTrials} />
			<Route exact path="/how-it-works" component={How} />
			<Route exact path="/log" component={Log} />
			<Route exact path="/search" component={How} />
			<Route component={Home} />
		</Switch>
	</App>;

export default AppRoutes;
