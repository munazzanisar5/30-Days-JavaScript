import { map } from 'lodash';

const arr = [1, 2, 3];
const doubled = map(arr, x => x * 2);
console.log(doubled);