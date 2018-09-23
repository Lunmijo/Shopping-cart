

export class CommonComponent {
  private products = [
    { 'categorie': 'Food', 'product': 'Apple'},
    { 'categorie': 'Food', 'product': 'Bread' },
    { 'categorie': 'Consumer electronics', 'product': 'Laptop'},
    { 'categorie': 'Consumer electronics', 'product': 'PC'},
    { 'categorie': 'Transport', 'product': 'Motorcycle'},
    { 'categorie': 'Consumer electronics', 'product': 'iPhone'},
    { 'categorie': 'Transport', 'product': 'Car'},
    { 'categorie': 'Toys', 'product': 'Shavel'},
    { 'categorie': 'Toys', 'product': 'Shortgun'},
    { 'categorie': 'Films', 'product': '6 string samurai DVD'},
    { 'categorie': 'Food', 'product': 'Orange'},
    { 'categorie': 'Food', 'product': 'Banana'},
    { 'categorie': 'Food', 'product': 'Potato'},
    { 'categorie': 'Electronics', 'product': 'USB Type-C'},
    { 'categorie': 'Electronics', 'product': 'Switch'},
    { 'categorie': 'Electronics', 'product': 'Keyboad'},
  ];
  private categories = [
    'Food',
    'Vehicle',
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

  getCategories() {
    return this.categories;
  }
  getProducts() {
    return this.products;
  }
  addCategory(value: string) {
    this.categories.push(value);
  }
  removeCategory(value: string) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i] === value) {
        this.categories.splice(i, 1);
        break;
      }
    }
  }

}
