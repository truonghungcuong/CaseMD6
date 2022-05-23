import {User} from './user';

export interface DeliveryInfo {
  id?: number;
  user?: User;
  name?: string;
  address?: string;
  phone?: string;
  isDefault?: boolean;
}
