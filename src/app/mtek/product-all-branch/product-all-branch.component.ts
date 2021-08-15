import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ProcuctBranchModel } from 'src/app/models/mtek/productBranch';
import { DashboardService } from 'src/app/Services/mtek/dashboard.service';

@Component({
  selector: 'app-product-all-branch',
  templateUrl: './product-all-branch.component.html',
  styleUrls: ['./product-all-branch.component.css'],
})
export class ProductAllBranchComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private activateRoute: ActivatedRoute
  ) {}

  displayedColumn: string[] = [
    'shopName',
    'pcd',
    'pdesc',
    'gpdesc',
    'blqty',
    'lsactv',
  ];

  dataSource = new MatTableDataSource<ProcuctBranchModel>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  pcd: string = '';
  textSearch: string = '';

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data) => {
      this.pcd = data.pcd;
    });
    this.feedData();
  }

  feedData() {
    this.dashboardService.GetProductAllBranch(this.pcd).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  search(event: any = null) {
    let filterVal = '';
    if (event) {
      filterVal = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = filterVal.trim().toLowerCase();
    this.dataSource.paginator = this.paginator!;
  }

  clearSearch() {
    this.textSearch = '';
    this.search();
    console.log(this.search);
  }
}
