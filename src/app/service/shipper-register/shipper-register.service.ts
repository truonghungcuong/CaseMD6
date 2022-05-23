import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MerchantRegister} from '../../model/merchant-register';
import {ShipperRegister} from '../../model/shipper-register';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ShipperRegisterService {

  constructor(private http: HttpClient) {
  }
  saveShipperRequest(shipperRegister): Observable<ShipperRegister> {
    return this.http.post<ShipperRegister>(API_URL + '/registerShipper', shipperRegister);
  }

  getAllShipperRequest(): Observable<ShipperRegister[]> {
    return this.http.get<ShipperRegister[]>(API_URL + '/registerShipper');
  }
  acceptShipperRegisterRequest(id: number, shipperRegister: ShipperRegister) {
    return this.http.post(`${API_URL}/registerShipper/accept/${id}`, shipperRegister);
  }

  refuseShipperRegisterRequest(id: number, shipperRegister: ShipperRegister) {
    return this.http.post(`${API_URL}/registerShipper/refuse/${id}`, shipperRegister);
  }
}
