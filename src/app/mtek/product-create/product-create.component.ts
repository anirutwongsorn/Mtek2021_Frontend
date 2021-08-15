import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductGroup } from 'src/app/models/mtek/productGroup';
import { ProcuctLocalModel } from 'src/app/models/mtek/productLocal';
import { ProductService } from 'src/app/Services/mtek/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  imageSrc!: string | ArrayBuffer;
  file!: File;
  pdGroup!: ProductGroup[];
  selectedValue: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductGroup();
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
    const val = productForm.value;
    var product = new ProcuctLocalModel();
    product.pcd = val.pcd;
    product.pdesc = val.pdesc;
    product.gpcd = val.gpCd;
    product.uom = val.uom;
    product.prcCost = 0;
    product.prcSale = val.prcSale;
    product.minStock = 0;
    product.blqty = val.blqty;
    product.images = this.file;

    //alert(JSON.stringify(product));

    Swal.fire({
      title: 'เพิ่มสินค้าใหม่?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยันการทำรายการ',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      //alert(JSON.stringify(product));
      if (result.isConfirmed) {
        this.productService.postAddnewProduct(product).subscribe(
          (_) => {},
          (err) => {
            console.log(err);
          }
        );
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
