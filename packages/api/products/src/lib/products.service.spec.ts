import { ProductService } from './products.service';

describe("ProductService", () => {
  let service: ProductService

  //beafore each test we are creating new service
  beforeEach(() => {
    service = new ProductService();
  });

  describe("addProduct", () => {
    it("should add new Product", () => {
      service.addProduct("Apple");
      const result = service.getProducts();
      expect(result).toEqual(["Apple"])
    })
  });

  describe("getProducts", () => {
    it("Should return all Products", () => {
      service.addProduct("Apple");
      service.addProduct("Pineapple");
      const result = service.getProducts();

      expect(result).toEqual(["Apple", "Pineapple"])
    })
  });

  describe("deleteProduct", () => {
    it("Should delete one product", () => {
      service.addProduct("Apple");
      service.addProduct("Pineapple");
      service.removeProduct(1);
      const result = service.getProducts();

      expect(result).toEqual(["Apple"]);
    })
  });

  describe("modifyProduct", () => {
    it("should modify product", () => {
      service.addProduct("Apple");
      service.addProduct("Pineapple");
      service.modifyProduct(1, "Orange");
      const result = service.getProduct(1);
      expect(result).toBe("Orange");
    })
  })
})