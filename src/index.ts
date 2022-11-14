export const ShortNumber = (num: number): string | number => {
    
  if (typeof num !== 'number') {
    throw new TypeError('Expected a number');
  }

  if (num > 1e19) {
    throw new RangeError('Input expected to be < 1e19');
  }

  if (num < -1e19) {
    throw new RangeError('Input expected to be > -1e19');
  }

  if (Math.abs(num) < 1000) {
    return num;
  }

  var shortNumber: number;
  var exponent: number;
  var size;
  var sign = num < 0 ? '-' : '';
  var suffixes: { label: string; value: number }[] = [
    { label: 'K', value: 6 },
    { label: 'M', value: 9 },
    { label: 'B', value: 12 },
    { label: 'TB', value: 15 },
    { label: 'MB', value: 18 },
  ];

  num = Math.abs(num);
  size = Math.floor(num).toString().length;

  exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
  shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;

  let label = '';
  suffixes.every((item, index) => {
    if (exponent < item.value) {
      label = item.label;
      return false;
    } else {
      return true;
    }
  });

  return `${sign}${shortNumber} ${label}`;
};
