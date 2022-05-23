import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DeliveryInfo} from '../../model/delivery-info';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DeliveryInfoService {

  constructor(private httpClient: HttpClient) {
  }

  getDefaultDeliveryInfo(userId: number) {
    return this.httpClient.get(`${API_URL}/users/${userId}/default-delivery-info`);
  }

  getOtherDeliveryInfos(userId: number) {
    return this.httpClient.get(`${API_URL}/users/${userId}/other-delivery-infos`);
  }

  setDeliveryInfoToSelected(userId: number, deliveryInfoId: number) {
    return this.httpClient.get(`${API_URL}/users/${userId}/${deliveryInfoId}/make-default`);
  }

  updateDeliveryInfo(deliveryInfoId: number, deliveryInfo: DeliveryInfo) {
    return this.httpClient.put(`${API_URL}/users/${deliveryInfoId}`, deliveryInfo);
  }

  createDelivery(deliveryInfo: DeliveryInfo){
    return this.httpClient.post(`${API_URL}/users/delivery/create`,deliveryInfo);
  }
}
