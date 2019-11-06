import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expense-total';

test('should return 0 if there are no expenses', () => {
  const result = selectExpensesTotal([]);

  expect(result).toBe(0);
});

test('should add up single expense correctly', () => {
  const result = selectExpensesTotal([expenses[0]]);

  expect(result).toBe(195);
});

test('should add multiple expenses correct', () => {
  const result = selectExpensesTotal(expenses);

  expect(result).toBe(80395);
});
