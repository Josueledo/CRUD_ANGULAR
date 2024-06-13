import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCostomersComponent } from './get-all-costomers.component';

describe('GetAllCostomersComponent', () => {
  let component: GetAllCostomersComponent;
  let fixture: ComponentFixture<GetAllCostomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllCostomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllCostomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
