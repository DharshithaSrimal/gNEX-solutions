import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponentComponent } from './pricing-component.component';

describe('PricingComponentComponent', () => {
  let component: PricingComponentComponent;
  let fixture: ComponentFixture<PricingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
