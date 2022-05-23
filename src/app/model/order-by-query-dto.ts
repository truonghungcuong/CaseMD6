import {User} from './user';

export interface OrderByQueryDto {
  id?: number;
  create_Date?: any;
  discount_Amount?: number;
  restaurant_Note?: string;
  service_Fee?: number;
  shipping_Fee?: number;
  shipping_Note?: string;
  total_Fee?: number;
  user_Id?: number;
  full_Name?: string;
  phone?: string;
  address?: string;
  email?: string;
}
