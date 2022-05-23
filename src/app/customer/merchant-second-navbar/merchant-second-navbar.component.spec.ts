import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSecondNavbarComponent } from './merchant-second-navbar.component';

describe('MerchantSecondNavbarComponent', () => {
  let component: MerchantSecondNavbarComponent;
  let fixture: ComponentFixture<MerchantSecondNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantSecondNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSecondNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
