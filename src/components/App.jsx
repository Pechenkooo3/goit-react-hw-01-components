
import user from '../data/user.json';
import Data from '../data/Data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './profile/profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './Transactions/TransactionHistory/TransactionHistory'

export const App = () => {
  return (<>
    <Profile avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={Data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>   
  )
}



