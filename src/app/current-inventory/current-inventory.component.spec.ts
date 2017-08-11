import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentInventoryComponent } from './current-inventory.component';
import { SharedModule } from '../shared/shared.module';

describe('CurrentInventoryComponent', () => {
  let component: CurrentInventoryComponent;
  let fixture: ComponentFixture<CurrentInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentInventoryComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
