import { ProductModel } from './product-model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new ProductModel("","",1,1,1,1,null!)).toBeTruthy();
  });
});
