import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerModel } from 'src/app/models/mtek/customer';
import { CustomerService } from 'src/app/Services/mtek/customer.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  constructor(
    private location: Location,
    private cusService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {}

  cusModel: CustomerModel = new CustomerModel();

  cusid: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.cusid = param.cusid;
    });
    this.getCustomerData();
  }

  getCustomerData() {
    this.cusService.getCustomerById(this.cusid).subscribe((data) => {
      this.cusModel = data[0];
    });
  }

  onSubmit(cusForm: NgForm) {
    if (cusForm.invalid) {
      return;
    }

    var val = cusForm.value;
    this.cusModel.fullName = val.fullName;
    this.cusModel.shopName = val.shopName;
    this.cusModel.addressNo = val.addressNo;
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
        this.cusService.putCustomerManagement(this.cusModel).subscribe((_) => {
          this.location.back();
        });
      }
    });
  }
}
