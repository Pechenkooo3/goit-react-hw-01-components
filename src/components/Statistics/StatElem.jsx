import PropTypes from 'prop-types';


export const StatElem = ({ stat: { label, percentage } }) => {
  return (
    <span>
      <span>{label} </span>
      <span>{percentage}%</span>
    </span>
  );
};

StatElem.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};