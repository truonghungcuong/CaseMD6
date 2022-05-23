import {Category} from './category';

export interface SearchForm {
  q?: string;
  categories?: Category[];
  limit?: number;
}
