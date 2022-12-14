import { Item } from "./StatisticCard.styled";

export function StatisticCard(props) {
	const { label, percent } = props;
	return (
	<Item>
			<span className="label">{label}</span>
			<span className="percentage">{percent}</span>
    </Item>
	)
}