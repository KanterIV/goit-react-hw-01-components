import { Profile } from 'components/Profile/Profile';
import user from './user';

const userLables = {
  followers: 'Followers',
  views: 'Views',
  likes: 'Likes',
  tagSimbol: '@',
};

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    >
      {userLables}
    </Profile>
  );
};
