export class PosBillModel {
  billtype: string;
  billCd: string;
  cusId: string;
  emp: string;
  gAmnt: number;
  gDiscnt: number;
  gTotal: number;
  pcd: string;
  uom: string;
  qty: number;
  prcs: number;
  discount: number;
  amount: number;

  constructor(){
      this.billtype = 'TG';
      this.billCd = '';
      this.cusId = '';
      this.emp = '';
      this.gAmnt = 0;
      this.gDiscnt = 0;
      this.gTotal = 0;
      this.pcd = '';
      this.uom = '';
      this.qty = 0;
      this.prcs = 0;
      this.discount = 0;
      this.amount = 0;
  }
}
