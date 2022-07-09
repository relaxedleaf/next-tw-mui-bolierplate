import PropTypes from 'prop-types';
import React from 'react';

const Layout = (props: any) => {
	const { children } = props;
	return <div className='container'>{children}</div>;
};

Layout.propTypes = {
	children: PropTypes.any,
};

export default Layout;
