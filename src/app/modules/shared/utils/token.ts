import { HttpHeaders } from '@angular/common/http';

export const headers = new HttpHeaders({
  Authorization: 'Bearer ' + localStorage.getItem('token'),
});
