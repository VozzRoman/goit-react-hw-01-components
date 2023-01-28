import dataProfile from '../mainData/user.json';
import data from '../mainData/data.json';
import friends from '../mainData/friends';
import transactions from '../mainData/transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FrendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={dataProfile.username}
        tag={dataProfile.tag}
        location={dataProfile.location}
        avatar={dataProfile.avatar}
        stats={dataProfile.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FrendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
