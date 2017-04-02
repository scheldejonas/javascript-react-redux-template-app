/**
 * Created by scheldejonas on 02/04/2017.
 */
// Libraries
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import Archive from './containers/Archive';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={browserHistory}>
    {/*<Route component={Page}>*/}
      <Route path="/" component={Archive} ></Route>
      <Route path="*" component={NotFound} />
    {/*</Route>*/}
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