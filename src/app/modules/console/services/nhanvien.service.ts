import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nhanvienRamdomUrl, nhanvienTime, nhanvienUrl, orderUrl } from '../../shared/utils/url';
import { headers } from '../../shared/utils/token';
import { Observable } from 'rxjs';
import { get } from 'lodash';

interface Employee {
  toObject(): any;
  ticketType: string;
}

@Injectable({
  providedIn: 'root',
})
export class NhanvienService {
  private BOT_TOKEN = '7066531105:AAHKEd7UaVbBcbfssTyQpMHA5fwb03E3dWI';
  private BASE_URL = `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`;
  private CHAT_ID = '-4243555077';
  constructor(private http: HttpClient) {

  }

  getAllNhanVien() {
    return this.http.get<[]>(`${nhanvienUrl}`);
  }
  getDataTranslate(lang:any) {
    return this.http.get(`./assets/data/${lang}.json`);
  }
  getAllRamdomNhanVien() {
    return this.http.get<[]>(`${nhanvienRamdomUrl}`);
  }

  getNhanVienById(id: any) {
    return this.http.get<any>(`${nhanvienUrl}/${id}`);
  }

  findByIdAndUpdateNhanVien(id: any,payload:any) {
 return this.http.put<any>(`${nhanvienTime}/${id}`, payload, { headers: headers });
  }
  findByIdAndUpdateRandomNhanVien(key: any,payload:any) {
    return this.http.put<any>(`${nhanvienRamdomUrl}/${key}`, payload, { headers: headers });
     }
  getNhanVienByKeyword(data: any) {
    return this.http.get<any>(`${nhanvienUrl}?keyword=${data}`);
  }

  postOrder(data: any): Observable<any> {
    return this.http.post(`${orderUrl}`, data);
  }

  sendNotification(dataEmployee: Employee): Observable<any> {
    const notificationTelegram = {
      providerType: 'TELEGRAM',
      templateData: () => {
        const pictures = `${get(dataEmployee.toObject(), 'picture', [])}\n`;
        const customerInfo = `Thông tin khách hàng:\n- Họ và tên: ${get(
          dataEmployee.toObject(),
          'customerName'
        )}\n- Số điện thoại: ${get(
          dataEmployee.toObject(),
          'phoneNumber'
        )}\n- Địa chỉ: ${get(dataEmployee.toObject(), 'address')}\n`;
        const commonInfo = `- Gía gói vé: ${get(
          dataEmployee.toObject(),
          'priceTicket',
          ''
        )}\n`;
        const commonInfoTime = `- Thời gian: ${get(
          dataEmployee.toObject(),
          'timeService',
          ''
        )}`;

        const messageContent = `${pictures}Nhân viên có mã số ${get(
          dataEmployee.toObject(),
          'employeeCode',
          ''
        )} vừa được đặt thành công\n${customerInfo}${commonInfo}${commonInfoTime}`;
        const messageContentNN = `${pictures}Nhân viên ngẫu nhiên vừa được đặt thành công\n${customerInfo}- Số lượng: ${get(
          dataEmployee.toObject(),
          'count',
          ''
        )}\n${commonInfo}${commonInfoTime}`;
        const ticketTypes: any = {
          'Vé chọn ngẫu nhiên': messageContentNN,
          'Vé chọn nhân viên': messageContent,
        };
        return { messageContent: ticketTypes[dataEmployee.ticketType] };
      },
    };

    const messageContent = notificationTelegram.templateData().messageContent;
    const params = new HttpParams()
      .set('chat_id', this.CHAT_ID)
      .set('text', messageContent);

    return this.http.get(this.BASE_URL, { params });
  }
}
