import TweetsData from './data'

function Tweets ({ last, username }) {


	return (
		<>
			Tweets...

			<ul>
				{
					(username ? TweetsData.filter(t => {

						return t.username === username

					}) : TweetsData).map((tweet) => {

						return (
							<li key={tweet.id}>
								{tweet.content}
							</li>
						)
					})
				}
			</ul>
		</>
	)
}

export default Tweets
