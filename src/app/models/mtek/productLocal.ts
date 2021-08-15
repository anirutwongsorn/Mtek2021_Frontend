export class ProcuctLocalModel {
  pcd: string;
  pdesc: string;
  gpcd: number;
  gpdesc: string;
  uom: string;
  imgPath: string;
  prcCost: number;
  prcSale: number;
  minStock: number;
  stock: number;
  blqty: number;
  lsactv: string;
  images!: any;

  constructor() {
    this.pcd = '';
    this.pdesc = '';
    this.gpcd = 0;
    this.gpdesc = '';
    this.uom = '';
    this.imgPath = '';
    this.prcCost = 0;
    this.prcSale = 0;
    this.stock = 0;
    this.minStock = 0;
    this.blqty = 0;
    this.lsactv = '';
  }
}
