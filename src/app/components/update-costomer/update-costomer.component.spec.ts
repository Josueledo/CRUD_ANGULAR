import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCostomerComponent } from './update-costomer.component';

describe('UpdateCostomerComponent', () => {
  let component: UpdateCostomerComponent;
  let fixture: ComponentFixture<UpdateCostomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCostomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCostomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
