import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerModel } from 'src/app/models/mtek/customer';
import { CustomerService } from 'src/app/Services/mtek/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  constructor(private cusService: CustomerService) {}

  cusModel: CustomerModel = new CustomerModel();

  ngOnInit(): void {}

  onSubmit(cusForm: NgForm) {
    if (cusForm.invalid) {
      return;
    }

    var val = cusForm.value;
    this.cusModel.cusId = 0;
    this.cusModel.fullName = val.fullName;
    this.cusModel.shopName = val.shopName;
    this.cusModel.addressNo = val.addressNo;
    this.cusModel.phoneNo = val.phoneNo;
    this.cusModel.postcd = val.postcd;

    //alert(JSON.stringify(this.cusModel));
    Swal.fire({
      title: 'เพิ่มข้อมูลลูกค้า?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยันการทำรายการ',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      //alert(JSON.stringify(product));
      if (result.isConfirmed) {
        this.cusService.addNewCustomer(this.cusModel).subscribe((_) => {});
      }
    });
  }
}
