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

  getNhanVienById(id: any) {
    return this.http.get<any>(`${nhanvienUrl}/${id}`);
  }

  findByIdAndUpdateNhanVien(id: any){
    return this.http.get<any>(`${nhanvienUrl}/${id}`);
  }
}
