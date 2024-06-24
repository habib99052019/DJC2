import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanyingComponent } from './accompanying.component';

describe('AccompanyingComponent', () => {
  let component: AccompanyingComponent;
  let fixture: ComponentFixture<AccompanyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccompanyingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccompanyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
