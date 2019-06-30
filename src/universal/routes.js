import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import MainTable from '../containers/Maintable';
import SubTable from '../containers/Subtable';
import loadHomeData from '../redux/actions/home/Home.asyncaction';
import loadMainTableData from '../redux/actions/mainTable/MainTable.asyncaction';
import loadSubTableData from '../redux/actions/subTable/SubTable.asyncaction';

// for more details see https://reacttraining.com/react-router/web/guides/server-rendering
// specify routes with the async function required to fetch the data to render the route
// IMPORTANT: the loadData function must return a Promise
export const routes = [{
  path: '/',
  exact: true,
  component: Home,
  loadData: () => loadHomeData(),
}, {
  path: '/MainTable',
  exact: true,
  component: MainTable,
  loadData: () => loadMainTableData(),
}, {
  path: '/SubTable',
  exact: true,
  component: SubTable,
  loadData: () => loadSubTableData(),
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
