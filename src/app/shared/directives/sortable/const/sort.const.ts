import {SortDirection} from '../type/sort-direction.type';

export const SORT_COMPARE = (v1: any, v2: any) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
export const SORT_ROTATE: { [key: string]: SortDirection } = {asc: 'desc', desc: '', '': 'asc'};
