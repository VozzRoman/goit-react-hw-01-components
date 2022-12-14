

export function StatisticCard(props) {
	const { label, percent } = props;
	return (
	<li className="item">
			<span className="label">{label}</span>
			<span className="percentage">{percent}</span>
    </li>
	)
}