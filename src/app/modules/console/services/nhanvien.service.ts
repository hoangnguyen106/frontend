import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NhanvienService {
  constructor(private http: HttpClient) {}

  getAllNhanVien(){
    return this.http.get
  }
}
