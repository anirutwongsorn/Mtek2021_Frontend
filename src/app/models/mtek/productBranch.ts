export class ProcuctBranchModel {
  cusId: number;
  shopName: string;
  phoneNo: string;
  village: string;
  province: string;
  district: string;
  subdistinct: string;
  postCd: number;

  pcd: string;
  pdesc: string;
  gpCd: number;
  gpdesc: string;
  uom: string;
  imgPath: string;
  prcCost: number;
  prcSale: number;
  minStock: number;
  blqty: number;
  lsactv: string;

  constructor() {
    this.cusId = 0;
    this.shopName = '';
    this.phoneNo = '';
    this.village = '';
    this.province = '';
    this.district = '';
    this.subdistinct = '';
    this.postCd = 0;

    this.pcd = '';
    this.pdesc = '';
    this.gpCd = 0;
    this.gpdesc = '';
    this.uom = '';
    this.imgPath = '';
    this.prcCost = 0;
    this.prcSale = 0;
    this.minStock = 0;
    this.blqty = 0;
    this.lsactv = '';
  }
}
