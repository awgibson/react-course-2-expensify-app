import filtersReducer from '../../reducers/filters';
import moment from 'moment';

describe('Filters Reducers', () => {
  // default filter
  test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    });
  });

  // sortby amount
  test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
  });

  // sortby date
  test('should set sortby to date', () => {
    const currentState = {
      text: '',
      startDate: undefined,
      endDate: undefined,
      sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
  });

  // set text filter
  test('should set text filter', () => {
    const text = 'gas';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
  });

  // start date filter
  test('should set startDate filter', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
  });

  // end date filter
  test('should set endDate filter', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
  });
});
