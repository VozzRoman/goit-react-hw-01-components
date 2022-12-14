import { AllFrendList } from "./FriendList.styled"
import { Friend } from "components/Frend/Frend"
export function FrendList({friends}) {
	return (
		
		<AllFrendList>
			{friends.map(item => (
				<Friend key={item.id}
					avatar={item.avatar}
					name={item.name}
					isOnline={item.isOnline}
				/>
			))}
		</AllFrendList>
	)
}