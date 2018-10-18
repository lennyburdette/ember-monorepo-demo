import { helper } from '@ember/component/helper';

export function formatMoney([value]) {
  const formatted = `$${value / 100}`;
  if (formatted.includes('.')) {
    return formatted + (formatted.split('.')[1].length === 1 ? '0' : '');
  }
  return formatted + '.00';
}

export default helper(formatMoney);
