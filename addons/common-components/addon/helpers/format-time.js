import { helper } from '@ember/component/helper';

export function formatTime([value]) {
  value = new Date(value);
  return `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`;
}

export default helper(formatTime);
