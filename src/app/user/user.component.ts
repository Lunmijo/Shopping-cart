import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  searchElement: string;
  getCategories() {
    const temp = new AdminComponent();
    return temp.categories;
  }
  search(searchValue) {
    this.searchElement = searchValue;
  }
}
