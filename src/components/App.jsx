
import dataProfile from "../user";
import data from "../data";
import friends from "../friends";
import transactions from "../transactions";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FrendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

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
		  <Statistics stats={data} />
		  <FrendList friends={friends} />
		  <TransactionHistory items={transactions}/>
	  </div>

  );
};
