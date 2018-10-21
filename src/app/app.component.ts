import { Component } from '@angular/core';
import { Data } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adminBlockShow = false;
  userBlockShow = false;
  data;
  constructor() {
    this.data = new Data();
  }
  chooseAdmin() {
    this.adminBlockShow = true;
    this.userBlockShow = false;
  }
  chooseUser() {
    this.userBlockShow = true;
    this.adminBlockShow = false;
  }
  getData() {
    return this.data;
  }
}
