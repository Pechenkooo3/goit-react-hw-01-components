import PropTypes from 'prop-types';
import {Elem} from './StatElem.style'

export const StatElem = ({ stat: { label, percentage } }) => {
  return ( <Elem>
    <span>{label} </span>
    <span>{percentage}%</span>
  </Elem>
  )
};

StatElem.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};