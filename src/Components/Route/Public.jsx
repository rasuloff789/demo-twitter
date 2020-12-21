import { Route } from 'react-router-dom'
import { Redirect, useLocation } from 'react-router-dom'

import { useLogin } from '../../Context/LoginContext'

function Public (props) {

	const [isLoggedIn] = useLogin();

	const location = useLocation();

	if (isLoggedIn && location.pathname === '/login') {
		return <Redirect to="/" />
	}

	return (
		<Route {...props} />
	)
}

export default Public
