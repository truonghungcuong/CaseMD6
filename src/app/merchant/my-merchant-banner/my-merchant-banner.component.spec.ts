import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMerchantBannerComponent } from './my-merchant-banner.component';

describe('MyMerchantBannerComponent', () => {
  let component: MyMerchantBannerComponent;
  let fixture: ComponentFixture<MyMerchantBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMerchantBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMerchantBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
