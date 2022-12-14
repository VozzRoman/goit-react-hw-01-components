import { StatisticCard } from "components/StatisticCard/StatisticCard";
export function Statistics({title, stats}) {
	return (
		<div>
			<section className="statistics">
				<h2 class="title">{title}</h2>

				<ul className="stat-list">	
					{stats.map(stat => (
						<StatisticCard key={stat.id}
						idNumber={stat.id}
						label={stat.label}
						percent={stat.percentage}
					/>
					))}
				
  </ul>
</section>

		</div>
	)
} 