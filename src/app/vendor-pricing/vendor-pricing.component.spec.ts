import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPricingComponent } from './vendor-pricing.component';
import { SharedModule } from '../shared/shared.module';

describe('VendorPricingComponent', () => {
  let component: VendorPricingComponent;
  let fixture: ComponentFixture<VendorPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPricingComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
