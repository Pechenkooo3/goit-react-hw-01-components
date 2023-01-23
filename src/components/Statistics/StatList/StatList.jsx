import PropTypes from "prop-types";
import { StatElem } from '../StatElem/StatElem';
import { StatData } from "./StatList.style";

export const StatList = ({stats}) => {
    return <StatData>
      {stats.map(stat => (
        <StatElem key={stat.id} stat={stat} />
      ))}
    </StatData>
};

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  )
};