import {
  ListStatistics,
  HeadTitle,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomColor } from './rendomColor';
import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
  return (
    <ListStatistics>
      {title && <HeadTitle>{title}</HeadTitle>}
      <StatList>
        {stats.map(({ id, label, percent }) => (
          <Item key={id} color={`${getRandomColor()}`}>
            <Label>{label}</Label>
            <Percentage>{percent}</Percentage>
          </Item>
        ))}
      </StatList>
    </ListStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
