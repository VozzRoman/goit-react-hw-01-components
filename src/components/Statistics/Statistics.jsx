import { StatisticCard } from "components/StatisticCard/StatisticCard";
import {ListStatistics, HeadTitle, StatList} from './Statistics.styled';
export function Statistics({title, stats}) {
	return (
		
			<ListStatistics>
				<HeadTitle>{title}</HeadTitle>

				<StatList>	
					{stats.map(stat => (
						<StatisticCard key={stat.id}
						label={stat.label}
						percent={stat.percentage}
					/>
					))}
  				</StatList>
			</ListStatistics>

		
	)
} 