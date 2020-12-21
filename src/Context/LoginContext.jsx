import { createContext, useState, useContext } from 'react'

const Context = createContext()

const Login = ({ children }) => {

	const [state, setState] = useState(false)

	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	)
}

const useLogin = (setterOnly) => {

	const { state, setState } = useContext(Context)

	return setterOnly ? [setState] : [state, setState]
}

export {
	Login,
	useLogin,
}
