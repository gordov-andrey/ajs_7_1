import Validator from '../validator';

test('Валидация true', () => {
  const input = 'Andrey555-Evo_lution';
  expect(Validator.validateUsername(input)).toBeTruthy();
});

test('Валидация > 3 цифр', () => {
  const input = 'Andrey5555-Evo_lution';
  expect(Validator.validateUsername(input)).toBeFalsy();
});

test('Валидация цифра впереди', () => {
  const input = '5Andrey555-Evo_lution';
  expect(Validator.validateUsername(input)).toBeFalsy();
});

test('Валидация цифра в конце', () => {
  const input = 'Andrey555-Evo_lution5';
  expect(Validator.validateUsername(input)).toBeFalsy();
});

test('Валидация тире', () => {
  const input = '-Andrey555-Evo_lution-';
  expect(Validator.validateUsername(input)).toBeFalsy();
});

test('Валидация земля', () => {
  const input = '_Andrey555-Evo_lution_';
  expect(Validator.validateUsername(input)).toBeFalsy();
});
