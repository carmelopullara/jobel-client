import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Layout = ({ title, children }) => {
  return (
    <Fragment>
      <Helmet defaultTitle="Jobel">
        {title && (
        <title>
          {title}
          {' '}
          - Jobel
        </title>
        )}
      </Helmet>
      {children}
    </Fragment>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
