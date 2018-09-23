import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adminBlockShow = false;
  userBlockShow = false;

  chooseAdmin() {
    this.adminBlockShow = true;
    this.userBlockShow = false;
  }
  chooseUser() {
    this.userBlockShow = true;
    this.adminBlockShow = false;
  }
}
