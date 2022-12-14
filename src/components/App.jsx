import { Profile } from "./Profile/Profile";
import dataProfile from "../user";
import data from "../data";
import { Statistics } from "./Statistics/Statistics";

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
	  </div>

    
   
  );
};
