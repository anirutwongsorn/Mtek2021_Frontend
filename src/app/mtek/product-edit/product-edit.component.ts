import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductGroup } from 'src/app/models/mtek/productGroup';
import { ProcuctLocalModel } from 'src/app/models/mtek/productLocal';
import { ProductService } from 'src/app/Services/mtek/product.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private location: Location
  ) {}

  product: ProcuctLocalModel = new ProcuctLocalModel();
  pdGroup!: ProductGroup[];
  selectedValue: string = '';
  pcd: string = '';
  pdesc: string = '';
  gpcd: number = 0;
  uom: string = '';
  prcCost: number = 0;
  prcSale: number = 0;
  stock: number = 0;

  file!: File;
  imageSrc!: string | ArrayBuffer;

  ngOnInit(): void {
    this.getProductGroup();
    this.getProductById();
  }

  getProductById() {
    this.activateRoute.params.subscribe((param) => {
      this.pcd = param.pcd;
    });
    this.productService.getProductById(this.pcd).subscribe((data) => {
      this.product = data[0];
      this.pdesc = this.product.pdesc;
      this.gpcd = this.product.gpcd;
      this.uom = this.product.uom;
      this.prcCost = 0;
      this.prcSale = this.product.prcSale;
      this.stock = this.product.stock;
    });
  }

  getProductGroup() {
    this.productService.getProductGroup().subscribe((data) => {
      this.pdGroup = data;
    });
  }

  onSubmit(productForm: NgForm) {
    if (productForm.invalid) {
      return;
    }
    //const val = productForm.value;
    //this.product.pcd = val.pcd;
    this.product.pdesc = this.pdesc;
    this.product.gpcd = this.gpcd;
    this.product.uom = this.uom;
    this.product.prcCost = 0;
    this.product.prcSale = this.prcSale;
    this.product.minStock = 0;
    this.product.blqty = 0;
    this.product.stock = this.stock;
    this.product.images = this.file;

    //alert(JSON.stringify(product));
    Swal.fire({
      title: 'แก้ไขข้อมูลสินค้า?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยันการทำรายการ',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      //alert(JSON.stringify(product));
      if (result.isConfirmed) {
        this.productService.putManageProduct(this.product).subscribe((_) => {
          this.location.back();
        });
      }
    });
  }

  onPreviewImage(event: any) {
    //lert('aaaaa');
    const metaImage = event.target.files[0];
    if (metaImage) {
      this.file = metaImage;
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onloadend = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }
}
