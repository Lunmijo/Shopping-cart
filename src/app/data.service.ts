import { Injectable } from '@angular/core';
import { Data } from './data/data';
import { Product } from './data/product';
import { Category } from './data/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;
  constructor() { 
    this.data = new Data();
  }
  uniqueElements(arr) {
    let obj = {};
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      obj[str] = true;
    }
    return Object.keys(obj); 
  }

  getStorageProducts() {
    let products = [];
    for (let key in localStorage) {
      let product = String(JSON.parse(localStorage.getItem(key) || '[]'));
      let tempProductArray = product.split(',');
        if (tempProductArray.length === 1) {
          products.push(tempProductArray);
        }
        else {
          for (let i = 0; i < tempProductArray.length; i++) {
            products.push(tempProductArray[i]);
          }
        }
    }
    products = this.uniqueElements(products);
    return products;
  }
  getStorageCategories() {
    let categories = [];
    for (let key in localStorage) {
      if (key == 'length') {
        break;
      }
      let temp = key.replace('\"', '');
      temp = temp.replace('\"', '');
      categories.push(temp);
    }
    return categories;
  }
  addProduct(product: Product) {
    this.data.addProduct(product);
  }
  removeProduct(value: String) {
    this.data.removeProduct(value);
  }

  addCategory(category: Category) {
    this.data.addCategory();
    localStorage.setItem(JSON.stringify(category.getName()), '');
  }
  removeCategory(category: Category) {
    this.data.removeCategory(category);
  }
  removeCategoryFromProduct(categ: Category) {
    this.data.removeCategory();
  }
  getSearchResult(value: String) {
    return this.data.getSearchResult(value);
  }
}
