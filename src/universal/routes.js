import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import About from '../containers/About';
import NotFound from '../containers/NotFound';
import Home2 from '../containers/Home2';
import MainTable from '../containers/Maintable';
import { getHomeData } from '../redux/actions/home';
import { getAboutData } from '../redux/actions/about';
import loadHomeData from '../redux/actions/home2/Home.asyncaction';
import loadMainTableData from '../redux/actions/mainTable/mainTable.async';

// for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the async function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise
export const routes = [{
  path: '/',
  exact: true,
  component: Home,
  loadData: () => getHomeData()
}, {
  path: '/about',
  exact: true,
  component: About,
  loadData: () => getAboutData()
}, {
  component: Home2,
  path: '/Home2',
  exact: true,
  loadData: () => loadHomeData(),
}, {
  path: '/MainTable',
  exact: true,
  component: MainTable,
  loadData: () => loadMainTableData(),
}, {
  component: NotFound
}];

export default function Router() {
  return (
    <App>
      <Switch>
        {routes.map(route => (
          <Route key={route.path || 'notfound'} {...route} />
        ))}
      </Switch>
    </App>
  );
}
