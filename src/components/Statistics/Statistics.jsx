
import { ListStatistics, HeadTitle, StatList, Item, Label, Percentage } from './Statistics.styled';
import { getRandomColor } from "./rendomColor";
export function Statistics({title, stats}) {
	return (
		
			<ListStatistics>
			{title === 'Upload stats' ? <HeadTitle>{title}</HeadTitle> : null}
				<StatList>	
					{stats.map(stat => (
					<Item color={`${getRandomColor()}`}>
			<Label >{stat.label}</Label>
			<Percentage>{stat.percent}</Percentage>
    </Item>
					))}
  				</StatList>
			</ListStatistics>
	)
} 