import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaveComponent } from './giave.component';

describe('GiaveComponent', () => {
  let component: GiaveComponent;
  let fixture: ComponentFixture<GiaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiaveComponent]
    });
    fixture = TestBed.createComponent(GiaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
