import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

describe('Test all expense actions', () => {
  test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123'
    });
  });

  test('Should setup edit expense object', () => {
    const action = editExpense('123', { note: 'hey' });

    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123',
      updates: {
        note: 'hey'
      }
    });
  });

  test('Should setup add expense action object with provided values', () => {
    const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: "This was last month's rent"
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    });
  });

  test('Should setup add expense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        id: expect.any(String)
      }
    });
  });
});
