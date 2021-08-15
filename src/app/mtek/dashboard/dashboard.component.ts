import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProcuctLocalModel } from 'src/app/models/mtek/productLocal';
import { DashboardService } from 'src/app/Services/mtek/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataSource = new MatTableDataSource<ProcuctLocalModel>();

  textSearch: string = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //@ViewChild(MatSort, { static: true }) sort!: MatSort;

  displayedColumn: string[] = [
    'imgPath',
    'pcd',
    'pdesc',
    'gpdesc',
    'prcSale',
    'stock',
    'blqty',
    'action'
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.feedData();
  }

  feedData() {
    this.dashboardService.GetLocalProduct().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator!;
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
