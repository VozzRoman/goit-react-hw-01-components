
import { ListStatistics, HeadTitle, StatList, Item, Label, Percentage } from './Statistics.styled';
import { getRandomColor } from "./rendomColor";
import PropTypes from 'prop-types';
export function Statistics({title, stats}) {
	return (
		
			<ListStatistics>
			{title === 'Upload stats' ? <HeadTitle>{title}</HeadTitle> : null}
				<StatList>	
					{stats.map(stat => (
					<Item key={stat.id} color={`${getRandomColor()}`}>
						<Label >{stat.label}</Label>
						<Percentage>{stat.percent}</Percentage>
    				</Item>
					))}
  				</StatList>
			</ListStatistics>
	)
} 

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired
		})
	)
}