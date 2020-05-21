import Magician from '../Magician';
import Daemon from '../Daemon';

test('Magician get attack', () => {
  const mag = new Magician('Вася');
  const result = mag.attack();
  expect(result).toBe(90);
});

test('Magician change distance and get attack', () => {
  const mag = new Magician('Вася');
  mag.distance += 1;
  const result = mag.attack();
  expect(result).toBe(80);
});

test('Daemon recieve attack from Magician', () => {
  const mag = new Magician('Вася');
  const dem = new Daemon('Петя');
  mag.attack(dem);
  expect(dem.health).toBe(10);
});

test('Daemon is stoned and attack Magician', () => {
  const mag = new Magician('Вася');
  const dem = new Daemon('Петя');
  dem.stoned(mag);
  expect(mag.health).toBe(15);
});

test('Magician kills Daemon', () => {
  const mag = new Magician('Вася');
  const dem = new Daemon('Петя');
  mag.attack(dem);
  mag.attack(dem);
  expect(() => { mag.attack(dem); }).toThrow();
});
