import { Item, Label, Percentage } from "./StatisticCard.styled";

import { getRandomColor } from "./rendomColor";

export function StatisticCard(props) {
	const {label, percent} = props;
	return (
	<Item color={`${getRandomColor()}`}>
			<Label >{label}</Label>
			<Percentage>{percent}</Percentage>
    </Item>
	)
};

