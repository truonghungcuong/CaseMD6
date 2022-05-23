import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {MerchantRegister} from '../../model/merchant-register';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class MerchantRegisterService {

  constructor(private http: HttpClient) {
  }

  saveMerchantRequest(merchantRegister): Observable<MerchantRegister> {
    return this.http.post<MerchantRegister>(API_URL + '/registerMerchant', merchantRegister);
  }

  getAllMerchantRequest(): Observable<MerchantRegister[]> {
    return this.http.get<MerchantRegister[]>(API_URL + '/registerMerchant');
  }

  acceptRegisterRequest(id: number, merchantRegister: MerchantRegister) {
    return this.http.post(`${API_URL}/registerMerchant/accept/${id}`, merchantRegister);
  }

  refuseRegisterRequest(id: number, merchantRegister: MerchantRegister) {
    return this.http.post(`${API_URL}/registerMerchant/refuse/${id}`, merchantRegister);
  }
}
