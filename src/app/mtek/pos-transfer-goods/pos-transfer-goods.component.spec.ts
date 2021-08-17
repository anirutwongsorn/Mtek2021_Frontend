import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosTransferGoodsComponent } from './pos-transfer-goods.component';

describe('PosTransferGoodsComponent', () => {
  let component: PosTransferGoodsComponent;
  let fixture: ComponentFixture<PosTransferGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosTransferGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosTransferGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
