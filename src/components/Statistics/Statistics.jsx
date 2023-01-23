import PropTypes from "prop-types";
import {StatList} from './StatList/StatList'
import { StatSection, StatTitle } from './Statistics.style'

export const Statistics = ({ title, stats }) => 
{
    return <StatSection>
      <StatTitle>{title}</StatTitle> 
      <StatList stats={stats} />
  </StatSection>
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
