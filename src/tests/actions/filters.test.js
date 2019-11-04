import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';
import moment from 'moment';

describe('Test filters', () => {
  // START DATE
  test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
    });
  });

  // END DATE
  test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
    });
  });

  // SET TEXT FILTER WITH SUPPLIED DATA
  test('should generate set text filter action object with input', () => {
    const action = setTextFilter('rent');

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'rent'
    });
  });

  // SET TEXT FILTER WITH DEFAULT DATA
  test('should generate set text filter action object with defaults', () => {
    const action = setTextFilter();

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
    });
  });

  //SORT BY AMOUNT
  test('should generate sort by amount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
    });
  });

  //SORT BY DATE
  test('should generate sort by date action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
      type: 'SORT_BY_DATE'
    });
  });
});
