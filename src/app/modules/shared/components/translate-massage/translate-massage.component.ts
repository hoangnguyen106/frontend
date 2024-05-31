import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-translate-massage',
  templateUrl: './translate-massage.component.html',
  styleUrls: ['./translate-massage.component.scss'],
})
export class TranslateMassageComponent implements OnInit {
  data: any;
  private dataLoaded: boolean = false;

  constructor(private translate: TranslateService, private http: HttpClient) {}

  ngOnInit(): void {
   
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);    
}
}

