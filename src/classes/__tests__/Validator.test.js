import Validator from '../Validator';

test.each([
  ['letruke', true],
  ['LeTruke', true],
  ['le0tr0uke', true],
  ['le-truke', true],
  ['le_truke', true],
  ['летрюке', false],
  ['le()truke', false],
  ['0letruke', false],
  ['letruke11', false],
  ['-letruke', false],
  ['letruke-', false],
  ['_letruke', false],
  ['letruke_', false],
  ['le27-05truke', true],
  ['le1988truke', false],
  ['le666truke', true],
  ['letruke1l', true],
  ['l90truke', true],
])('Testing validateUsername function with %s attribute', (username, expected) => {
  const validator = new Validator(username);

  const result = validator.validateUsername();

  expect(result).toBe(expected);
});
