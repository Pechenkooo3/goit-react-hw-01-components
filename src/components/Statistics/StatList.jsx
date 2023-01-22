import PropTypes from "prop-types";
import { StatElem } from './StatElem';

export const StatList = ({stats}) => {
    return (<div>
      {stats.map(stat => (
        <StatElem key={stat.id} stat={stat} />
      ))}
    </div>)
};

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  )
};