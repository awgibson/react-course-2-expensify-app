import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render Expenses summary with 1 expens', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );

  expect(wrapper).toMatchSnapshot();
});

test('should correctly render Expenses summary with multiple expens', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={16} expensesTotal={2365756765} />
  );

  expect(wrapper).toMatchSnapshot();
});
