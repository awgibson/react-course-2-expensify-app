import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

describe('Expenses reducers', () => {
  // default state gets set
  test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  // remove expense with valid ID
  test('should remove expense with a valid ID provided', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
  });

  // remove expense without valid ID
  test('should not remove expense with a invalid ID', () => {
    const action = { type: 'REMOVE_EXPENSE', id: -1 };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  // add expense
  test('should add an expense', () => {
    const expense = {
      id: '109',
      description: 'Computer',
      amount: 10000,
      note: '',
      createdAt: 2000
    };
    const action = { type: 'ADD_EXPENSE', expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });

  // edit expense
  test('should add an expense', () => {
    const description = 'Computer';

    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[0].id,
      updates: { description }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
  });

  // do not edit expense if ID not found
  test('should not add an expense if ID not found', () => {
    const description = 'Computer';

    const action = {
      type: 'EDIT_EXPENSE',
      id: '-2',
      updates: { description }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});
