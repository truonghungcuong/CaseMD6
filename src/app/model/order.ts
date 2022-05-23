import {User} from './user';
import {DeliveryInfo} from './delivery-info';

export interface Order {
  id?: number;
  user?: User;
  createDate?: Date;
  coupon?: any;
  deliveryInfo?: DeliveryInfo;
  serviceFee?: number;
  shippingFee?: number;
  discountAmount?: number;
  totalFee?: number;
  restaurantNote?: string;
  shippingNote?: string;
  status?: number;
}
