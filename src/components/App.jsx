
import dataProfile from "../user";
import data from "../data";
import friends from "../friends";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FrendList } from "./FriendList/FriendList";

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
	  </div>

    
   
  );
};
