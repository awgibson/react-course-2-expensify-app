import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>Info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. </p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You are not authenticated</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info='details' />,
//   document.getElementById('app')
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info='details' />,
  document.getElementById('app')
);
