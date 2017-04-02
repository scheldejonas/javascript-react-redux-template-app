/**
 * Created by scheldejonas on 02/04/2017.
 */
// Libraries
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import FrontPage from './templates/FrontPage';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={FrontPage} />
    <Route path="/jj" component={NotFound} />
  </Router>
);

export default routes;

{/*<Route path="courses" component={Courses} >*/}
{/*<IndexRedirect to="html" />*/}
{/*<Route path="css" component={CSS} />*/}
{/*<Route path="java" component={Java} />*/}
{/*<Route path="javascript" components={JavaScript} />*/}
{/*</Route>*/}
{/*<Route path="featured/:topic/:name" component={Featured} />*/}