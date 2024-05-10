import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nhanvienUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class NhanvienService {
  constructor(private http: HttpClient) {}

  getAllNhanVien() {
    return this.http.get<[]>(`${nhanvienUrl}`);
  }
}
