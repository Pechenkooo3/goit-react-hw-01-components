import PropTypes from 'prop-types';
import {FriendItem} from '../FriendList/FriendItem'
import { Friends } from './FriendList.style';

export const FriendList = ({friends}) => {
    return <Friends>
        {friends.map(friend => (
            <FriendItem key={friend.id} friend={ friend} />
        ))}
    </Friends>
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};