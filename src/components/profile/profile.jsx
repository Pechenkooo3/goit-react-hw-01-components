import PropTypes from "prop-types";
import {
  Card,
  UserContent,
  UserImage,
  UserName,
  UserTag,
  StatsList,
  UserLocation,
  StatsItem,
  StatsQuantity,
  StatsLabel
} from './profile.style';

export const Profile = ({ username, avatar, tag, location, stats }) => {
    return <Card>
        <UserContent>
        <UserImage src={avatar} alt={username}/>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
        </UserContent>
        <StatsList>
            <StatsItem>
                <StatsLabel>followers</StatsLabel>
                <StatsQuantity>{stats.followers }</StatsQuantity>
            </StatsItem>
             <StatsItem>
                <StatsLabel>views</StatsLabel>
                <spaStatsQuantityn>{stats.views }</spaStatsQuantityn>
            </StatsItem>
             <StatsItem>
                <StatsLabel>likes</StatsLabel>
                <StatsQuantity>{stats.likes }</StatsQuantity>
            </StatsItem>
        </StatsList>
    </Card>
    
}

Profile.propTypes = {
    username:PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:PropTypes.shape({
        followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
    })
}



