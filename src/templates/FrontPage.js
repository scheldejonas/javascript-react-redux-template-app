/**
 * Created by scheldejonas on 02/04/2017.
 */
import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PostReducer from '../reducers/post';

// Post connection to state
const store = createStore(
  PostReducer,
  window.devToolsExtension && window.devToolsExtension()
);

// Components
import Archive from '../containers/Archive';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Archive />
        </Provider>
        { this.props.children }
      </div>
    );
  };
};

export default FrontPage;