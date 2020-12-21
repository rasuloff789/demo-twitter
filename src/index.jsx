import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { Login } from './Context/LoginContext'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Login>
				<App />
			</Login>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
