import PropTypes from 'prop-types';
import { TransactionItem } from '../TransactionItem/TransactionItem';
import { Table, TableHead, TableBody, TableBodyList } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <TableHead>
        <tr>
          <TableBodyList>Type</TableBodyList>
          <TableBodyList>Amount</TableBodyList>
          <TableBodyList>Currency</TableBodyList>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};