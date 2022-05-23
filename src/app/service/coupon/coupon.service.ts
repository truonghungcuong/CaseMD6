import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient) {
  }

  getCouponByDishId(dishId: number) {
    return this.httpClient.get(`${API_URL}/coupons/dishes/${dishId}`);
  }

  getCouponByMerchantId(merchantId: number) {
    return this.httpClient.get(`${API_URL}/coupons/merchants/${merchantId}`);
  }

}
