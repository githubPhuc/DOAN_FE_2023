export class RegisterModel {
    constructor(
        public fullName:string,
        public username:string,
        public password:string,
        public email:string,
        public phone:string,
        public shippingAddress:string
    ) {}
}
