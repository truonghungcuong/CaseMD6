import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantVsattpComponent } from './merchant-vsattp.component';

describe('MerchantVsattpComponent', () => {
  let component: MerchantVsattpComponent;
  let fixture: ComponentFixture<MerchantVsattpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantVsattpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantVsattpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
