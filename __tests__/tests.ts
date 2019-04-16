import { paddingLeft,paddingRight } from '../src/index';
test('Padding Left', () => {
  expect(paddingLeft('Carl',10,'0')).toBe('000000Carl');
});
test('Padding Right', () => {
  expect(paddingRight('Carl',10,'0')).toBe('Carl000000');
})

test('Padding Left With less characters that those provided', () => {
  expect(paddingLeft('Carl',2,'0')).toBe('Carl');
})
test('Padding Right With less characters that those provided', () => {
  expect(paddingRight('Carl',2,'0')).toBe('Carl');
})