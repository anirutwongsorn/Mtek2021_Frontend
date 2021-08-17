import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerModel } from 'src/app/models/mtek/customer';
import { CustomerService } from 'src/app/Services/mtek/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  dataSource = new MatTableDataSource<CustomerModel>();

  textSearch: string = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private customerService: CustomerService) {}

  displayedColumn: string[] = [
    'cusId',
    'fullName',
    'shopName',
    'phoneNo',
    'addressNo',
    'postcd',
    'action',
  ];

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomer().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  search(event: any = null) {
    let filterVal = '';
    if (event) {
      filterVal = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = filterVal.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search();
    console.log(this.search);
  }
}
