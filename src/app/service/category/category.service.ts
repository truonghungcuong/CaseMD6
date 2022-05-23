import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCategory() {
    return this.httpClient.get(`${API_URL}/categories`);
  }

  getTop5Categories() {
    return this.httpClient.get(`${API_URL}/categories/top-five`);
  }
}
