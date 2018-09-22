import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  products = [
    'Apple',
    'Bread',
    'Laptop',
    'PC',
    'Motorcycle',
    'iPhone',
    'Car',
    'Shavel',
    'Shortgun',
    '6 string samurai DVD',
    'Orange',
    'Banana',
    'Potato',
    'USB Type-C',
    'Switch',
    'Keyboad',
  ];
  categories = [
    'Food',
    'Vehicle',
    'Food',
    'Beverages',
    'Consumer electronics',
    'Event tickets',
    'Gift vouchers',
    'DVDs',
    'Crafts',
    'Coins',
    'gifts',
    'Medicines',
    'Beauty',
    'Footwear',
    'Films',
    'Books',
    'Games',
    'Toys',
    'Computer parts',
    'Tools',
    'Paints',
    'Electronics',
    'Transport',
    'Musical instruments',
    'Cellphones',
    'Glues',
    'Adhesives'];
}
