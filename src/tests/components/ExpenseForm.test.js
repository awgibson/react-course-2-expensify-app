import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render exepense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test('should render exepense form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);

  expect(wrapper).toMatchSnapshot();
});

test('should set descrption on input change', () => {
  const value = 'Test Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value }
    });

  expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
  const value = 'This is a note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input change', () => {
  const value = '34.56';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input change', () => {
  const value = '34.567';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new date on focus change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
    focused
  });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
