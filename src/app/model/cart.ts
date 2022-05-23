import {CartDetail} from './cart-detail';
import {Merchant} from './merchant';

export interface Cart {
  id?: number;
  user?: any;
  cartDetails?: CartDetail[];
  foodTotal?: number;
  merchant?: Merchant;
  discountAmount?: number;
  serviceFee?: number;
  shippingFee?: number;
  totalFee?: number;
}
