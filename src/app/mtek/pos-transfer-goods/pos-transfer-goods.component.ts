import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/mtek/customer';
import { CustomerService } from 'src/app/Services/mtek/customer.service';

@Component({
  selector: 'app-pos-transfer-goods',
  templateUrl: './pos-transfer-goods.component.html',
  styleUrls: ['./pos-transfer-goods.component.css'],
})
export class PosTransferGoodsComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customer: CustomerModel[] = [];

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe((data) => {
      this.customer = data;
    });
  }
}
