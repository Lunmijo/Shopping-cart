import { Category } from "./category";

export class Product {
    name: string;
    category = [];
    price: number;

    constructor(n, cat: Category[], pr) {
        this.name = n;
        this.category = cat;
        this.price = pr;
    }
    getProductName() {
        return this.name;
    }
    getCategoryProd() {
        return this.category;
    }
    getPrice() {
        return this.price;
    }
    getFullInfoProduct() {
        return [this.name, this.category, this.price];
    }
    removeCategory(categ: Category) {
        let index = this.category.indexOf(categ);
        this.category.splice(index, 1);
    }
    getSearchInfoProduct() {
        return [this.name, this.price];
    }
}