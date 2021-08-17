export class CustomerModel {
  cusId: number;
  fullName: string;
  shopName: string;
  phoneNo: string;
  addressNo: string;
  postcd: string;

  constructor() {
    this.cusId = 0;
    this.fullName = '';
    this.shopName = '';
    this.phoneNo = '';
    this.addressNo = '';
    this.postcd = '';
  }
}
