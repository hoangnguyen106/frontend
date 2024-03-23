// axios.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';
import { BASE_URL } from './constant/defaultValue';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  setupAxios() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }
}
