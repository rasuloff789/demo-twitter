import { Route, Redirect } from 'react-router-dom'

import { useLogin } from '../../Context/LoginContext'

function Private (props) {

	const [isLogged] = useLogin()

	if (isLogged) {

		return <Route {...props} />
	}

	return <Redirect to="/login" />
}

export default Private
