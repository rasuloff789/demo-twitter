import './Login.css'

import { useLogin } from '../../Context/LoginContext'

function Login () {
	
	const [setLogin] = useLogin(true)
	setLogin(false);
	
	return (
		<>
		<div id="login">
		<button onClick={() => {
			setLogin(true)
		}}>Login</button>
		</div>
		</>
		)
	}
	
	export default Login
	