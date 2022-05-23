import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shipper} from '../../model/shipper';
import {Merchant} from '../../model/merchant';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Shipper[]> {
    return this.http.get<Shipper[]>(`${API_URL}/shippers`);
  }
  updateActiveShipper(id: number, merchant: Merchant): Observable<Merchant> {
    return this.http.put(`${API_URL}/shippers/${id}`, merchant);
  }
}
