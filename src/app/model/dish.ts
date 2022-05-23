import {Category} from './category';
import {Merchant} from './merchant';

export interface Dish {
  id?: number;
  name?: string;
  price?: number;
  categories?: Category[];
  merchant?: Merchant;
  sold?: number;
  description?: string;
  image?: string;
}
