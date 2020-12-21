import { useParams } from 'react-router-dom'
import Tweets from '../../Components/Tweets/Tweets'
import { useLogin } from '../../Context/LoginContext'

function Profile () {

	const { username } = useParams()

	const [setLogin] = useLogin(true)

	return (
		<>
			<Tweets username={username} />

			<button onClick={() => setLogin(false)}>Logout</button>
		</>
	)
}

export default Profile
