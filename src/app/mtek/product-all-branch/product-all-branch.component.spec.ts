import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAllBranchComponent } from './product-all-branch.component';

describe('ProductAllBranchComponent', () => {
  let component: ProductAllBranchComponent;
  let fixture: ComponentFixture<ProductAllBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAllBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAllBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
