import { atom } from 'recoil';
import type { TodoData } from '../../API/types';

export const todoState = atom<TodoData[]>({
  key: 'todos',
  default: [],
});
