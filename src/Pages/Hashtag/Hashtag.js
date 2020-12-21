import { tweetsWithType } from "../../Components/Tweets/data"

function Hashtag (info) {
  
  let PAGINATION_NUMBER = 2;
  
  
  let filteredData = tweetsWithType.filter(tweet => {
    return info.match.params.type.toLowerCase() === tweet.type.toLowerCase();
  });
  
  return (
    <>
    <ul>
    {
      
      filteredData.slice(PAGINATION_NUMBER * info.match.params.pagenumber - PAGINATION_NUMBER , PAGINATION_NUMBER * info.match.params.pagenumber).map(obj => {
        return (
          <li key={obj.id}>{obj.tweet}</li>
          )
        })
      }
      </ul>
      </>
      );
    };
    
    export default Hashtag;