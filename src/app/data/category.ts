export class Category {
    private name: string;
    private products = [''];
    constructor(value, prods = ['']) {
        this.name = value;
        this.products = prods;
    }
    getName() {
      return this.name;  
    }
    getProducts() {
        return this.products;
    }
}