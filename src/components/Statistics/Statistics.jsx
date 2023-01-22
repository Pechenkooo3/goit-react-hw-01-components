import PropTypes from "prop-types";
import {StatList} from './StatList'

export const Statistics = ({ title, stats }) => 
{
    return (<section>
      <Statistics>{title}</Statistics> 
      <StatList stats={stats} />
  </section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  
};
