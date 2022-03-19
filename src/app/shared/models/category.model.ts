import { CategoryNameKey } from './category-name-key.model';

export interface Category {
  name: CategoryNameKey;
  icon: string;
  path?: string;
  disabled?: boolean;
  selected?: boolean;
}
