import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../data/product';
import { Category } from '../data/category';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dataService;
  checkboxes = [];

  constructor() { 
    this.dataService = new DataService();
  }

  ngOnInit() {
  }

  storageProducts() {
    return this.dataService.getStorageProducts();
  }
  storageCategories() {
    return this.dataService.getStorageCategories();
  }

  addCheckbox(categorie: string) {
    if (this.checkboxes.length > 0) {
      for (let i = 0; i < this.checkboxes.length; i++) {
        if (categorie === this.checkboxes[i]) {
          this.checkboxes.splice(i, 1);
          break;
        } else {
          this.checkboxes.push(categorie);
          break;
        }
      }
    } else {
      this.checkboxes.push(categorie);
    }
  }
  addProd(name: String, price: String) {
    let tempProduct = new Product(name, this.checkboxes, price);
    this.dataService.addProduct(tempProduct);
  }
  removeProd(name: String) {
    this.dataService.removeProduct(name);
  }
  addCategory(category: String) {
    let tempCateg = new Category(category);
    this.dataService.addCategory(tempCateg);
  }
  removeCategory(category) {
    let tempCateg = new Category(category);
    this.dataService.removeCategory(tempCateg);
  }
}
