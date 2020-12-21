import { Fragment } from 'react'
import './App.css'
import { Switch , NavLink } from 'react-router-dom'

import Public from './Components/Route/Public'
import Private from './Components/Route/Private'

import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Profile from './Pages/Profile/Profile'
import Hashtag from './Pages/Hashtag/Hashtag'


// import { useLogin } from './Context/LoginContext'

function App () {

	return (
		<Fragment>

			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/signup">SignUp</NavLink>
				<NavLink to="/science">Profile</NavLink>
			</nav>

			<Switch>

				<Public path="/" component={Home} exact />
				<Public path="/login" component={Login} exact />
				<Public path="/signup" component={SignUp} exact />
				<Public path="/:type/:pagenumber" component={Hashtag} exact />


				<Private path="/:username" component={Profile} exact />
				
			</Switch>

		</Fragment>
	)
}

export default App
