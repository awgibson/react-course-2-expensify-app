import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  id,
  note
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      ${(amount / 100).toFixed(2)} - {moment(createdAt).format('MMM Do, YYYY')}
    </p>
    <p>Note: {note}</p>
  </div>
);
export default ExpenseListItem;
