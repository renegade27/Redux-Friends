import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
);

const mapStateToProps = ({ token, errMsg }) => ({
    errMsg,
    token
  });

export default withRouter(
    connect(
      mapStateToProps,
      {}
    )(PrivateRoute)
  );