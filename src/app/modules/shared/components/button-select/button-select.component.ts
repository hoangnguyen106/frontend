import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss'],
})
export class ButtonSelectComponent {
  @Input() title = '';
  @Input() linkNhanVien = '';
}
