import { CategoryNameKey } from './category-name-key.enum';

export interface Category {
  name: CategoryNameKey;
  icon: string;
  path: string;
  disabled: boolean;
}
