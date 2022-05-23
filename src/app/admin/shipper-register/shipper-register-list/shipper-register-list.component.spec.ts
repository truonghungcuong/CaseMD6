import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperRegisterListComponent } from './shipper-register-list.component';

describe('ShipperRegisterListComponent', () => {
  let component: ShipperRegisterListComponent;
  let fixture: ComponentFixture<ShipperRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
