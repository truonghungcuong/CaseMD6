import {Merchant} from './merchant';

export interface Coupon {
  id?: number;
  name?: string;
  type?: string;
  value?: number;
  merchant?: Merchant;
}
