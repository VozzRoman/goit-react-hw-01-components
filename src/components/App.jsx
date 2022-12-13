import { Profile } from "./Profile/Profile";
import dataProfile from "../user";

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
    </div>
    
   
  );
};
