import { Profile } from 'components/Profile/Profile';
import user from './user';
import { Statistics } from 'components/Statistics/Statistics';
import data from './data';

const userLables = {
  followers: 'Followers',
  views: 'Views',
  likes: 'Likes',
  tagSimbol: '@',
};

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      >
        {userLables}
      </Profile>

      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
