
import user from '../data/user.json'
import data from '../data/Data.json'
import { Profile } from './profile/profile'
import {Statistics} from '../components/Statistics/Statistics'

export const App = () => {
  return (<>
    <Profile avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats"
      stats={data} />
    </>
    
  )
}



