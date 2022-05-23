import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantRegisterListComponent } from './merchant-register-list.component';

describe('MerchantRegisterListComponent', () => {
  let component: MerchantRegisterListComponent;
  let fixture: ComponentFixture<MerchantRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
