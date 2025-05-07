export function random<T>(array: T[]): T {
  const random = Math.random() * (array.length - 1);
  return array[Math.floor(random)];
}
