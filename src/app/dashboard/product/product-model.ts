export class ProductModel {
    constructor(
        public name:string,
        public description:string,
        public price:number,
        public categoryid:number,
        public quantity:number,
        public trademark:string,
        public star:number,
        public image:File,
        public status:boolean
    ){}
}
