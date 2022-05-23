import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {OrderDto} from '../../model/order-dto';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  createOrder(orderDto: OrderDto): Observable<{ id?: number }> {
    return this.httpClient.post(`${API_URL}/current-user/create-order`, orderDto);
  }

  getOrder(orderId: number): Observable<OrderDto> {
    return this.httpClient.get(`${API_URL}/orders/${orderId}`);
  }

  cancelOrder(orderId: number, orderDto: OrderDto) {
    return this.httpClient.post(`${API_URL}/orders/${orderId}/cancels`, orderDto);
  }
}
