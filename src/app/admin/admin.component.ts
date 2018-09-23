import { Component } from '@angular/core';
import { CommonComponent} from '../common/common.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  getProducts() {
    const temp = new CommonComponent();
    return temp.getProducts();
  }
  getCategories() {
    const temp = new CommonComponent();
    return temp.getCategories();
  }
}
