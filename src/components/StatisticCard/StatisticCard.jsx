import { Item, Label, Percentage } from "./StatisticCard.styled";
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export function StatisticCard(props) {
	const { label, percent } = props;
	return (
	<Item>
			<Label color={`${getRandomColor()}`}>{label}</Label>
			<Percentage>{percent}</Percentage>
    </Item>
	)
}
