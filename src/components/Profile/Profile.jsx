// import css from './Profile.module.css';
import { Card, Description, Stats, Avatar, Name, Tag, Location, Label, Quantity } from './Profile.styled';
export function Profile({username, tag, location, avatar, stats}) {
    return (
<Card>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location }</Location>
  </Description>

  <Stats>
    <li>
            <Label>Followers</Label>
	<Quantity>{stats.followers}</Quantity>
    </li>
    <li>
            <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </li>
    <li>
      <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
    </li>
  </Stats>
</Card>
    )
}
