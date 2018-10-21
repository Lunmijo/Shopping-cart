import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchValue;
  checkboxes = [];
  resultsNumber = 0;
  results = [];
  dataService = new DataService();
  constructor() { }

  ngOnInit() {
  }
  getCategories() {
    return this.dataService.getStorageCategories();
  }
  getProducts() {
    return this.dataService.getStorageProducts();
  }
  addChecked(categorie: string) {
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

  search(value: String) {
    if (value === '' && this.checkboxes.length > 0) {
      let tempResults = [];

      for (let i = 0; i < this.checkboxes.length; i++) {
        let temp = JSON.parse(localStorage.getItem(JSON.stringify(this.checkboxes[i])));
        temp = String(temp).split(',');
        
        if (temp.length === 1) {
          let res = this.dataService.getSearchResult(temp[0])[0] + '        $' + this.dataService.getSearchResult(temp[0])[1];
          tempResults.push(res);
        }

        else {
          for (let j = 0; j < temp.length; j++) {
            let res = this.dataService.getSearchResult(temp[j])[0] + '        $' + this.dataService.getSearchResult(temp[j])[1];
            tempResults.push(res);
          }
        }

      }

      this.results = this.dataService.uniqueElements(tempResults);
      this.resultsNumber = this.results.length;
      this.searchValue = "none";
    }

    else {
    this.searchValue = value;
    let keys = [];
    for (let key in localStorage) {
      key = key.replace('\"', '');
      key = key.replace('\"', '');
      keys.push(key);
    }
    let temp;
    for (let i = 0; i < keys.length; i++) {
        temp = JSON.parse(localStorage.getItem(JSON.stringify(keys[i])));
        if (temp && temp.length !== 0) {
          for (let j = 0; j < temp.length; j++) {
            if (value == temp[j]) {
              this.resultsNumber = 1;
              this.results = [];
              let res = this.dataService.getSearchResult(value)[0] + '        $' + this.dataService.getSearchResult(value)[1];
              this.results.push(res);
              return;
            }
          }
        }
      }
      this.resultsNumber = 0;
        this.results = [];
        this.results.push("Nothing was found");
  }
}

}
