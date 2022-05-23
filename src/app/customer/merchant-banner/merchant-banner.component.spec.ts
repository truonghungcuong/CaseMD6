import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantBannerComponent } from './merchant-banner.component';

describe('MerchantBannerComponent', () => {
  let component: MerchantBannerComponent;
  let fixture: ComponentFixture<MerchantBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
