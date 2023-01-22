import PropTypes from "prop-types";

export const Profile = ({ username, avatar, tag, location, stats }) => {
    return <section>
        <div>
        <img src={avatar} alt={username}/>
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
        </div>
        <ul>
            <li>
                <span>followers</span>
                <span>{stats.followers }</span>
            </li>
             <li>
                <span>views</span>
                <span>{stats.views }</span>
            </li>
             <li>
                <span>likes</span>
                <span>{stats.likes }</span>
            </li>
        </ul>
    </section>
    
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



