import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  searchElement: string;
  checkboxes = [];
  results = [];
  getCategories() {
    const temp = new AdminComponent();
    return temp.categories;
  }
  search(searchValue) {
    this.results = [];
    this.searchElement = '';
    if (searchValue !== '') {
      this.searchElement = searchValue;
      this.results.push(searchValue);
    }
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
}
