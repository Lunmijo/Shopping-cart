import { Category } from "./category";
import { Product } from "./product";

//some category to start work with
export class Data {
    private food = new Category('food', ['one', 'thirteen']);
    private beverages = new Category('beverages', ['two', 'five']);
    private electronics = new Category('electronics', ['ten']);
    private transport = new Category('transport', ['some-transp']);
    private musicial_instr = new Category('musicial instruments', ['eighteen']);
    private cellphones = new Category('cellphones', ['six']);
    private glues = new Category('glues', ['twenty']);
    private adhesives = new Category('adhesives', ['three']);
    private paints = new Category('paints', ['seventeen']);
    private tools = new Category('tools', ['smth']);
    private comp_parts = new Category('computer parts', ['smth-again']);
    private toys = new Category('toys', ['smth-too']);
    private games = new Category('games', ['fifteen', 'sixteen']);
    private books = new Category('books', ['five']);
    private films = new Category('films', ['twelve']);
    private crafts = new Category('crafts', ['eight']);
    private footwear = new Category('footwear', ['fourteen']);
    private beauty = new Category('beauty', ['four']);
    private medicines = new Category('medicines', ['nineteen']);
    private gifts = new Category('gifts', ['twenty-one']);
    private coins = new Category('coins', ['seven']);
    private event_tick = new Category('event tickets', ['ten']);
    private DVDs = new Category('DVDs', ['nine']);
    private gift_vouchers = new Category('gift vouchers', ['twenty-two']);

    categories = [
        this.food,
        this.beverages,
        this.electronics,
        this.transport,
        this.musicial_instr,
        this.cellphones,
        this.glues,
        this.adhesives,
        this.paints,
        this.tools,
        this.comp_parts,
        this.toys,
        this.games,
        this.books,
        this.films,
        this.crafts,
        this.footwear,
        this.beauty,
        this.medicines,
        this.gifts,
        this.coins,
        this.event_tick,
        this.DVDs,
        this.gift_vouchers
];
    products = [
        new Product('one', [this.food], 100),
        new Product('two', [this.beverages], 200),
        new Product('three',[this.adhesives], 300),
        new Product('four',[this.beauty], 400),
        new Product('five',[this.beverages, this.books], 500),
        new Product('six',[this.cellphones], 600),
        new Product('seven',[this.coins], 700),
        new Product('eight',[this.crafts], 800),
        new Product('nine',[this.DVDs], 900),
        new Product('eleven', [this.electronics], 1100),
        new Product('ten', [this.event_tick], 1000),
        new Product('twelve', [this.films], 1200),
        new Product('thirteen', [this.food], 1300),
        new Product('fourteen', [this.footwear], 1400),
        new Product('fifteen', [this.games], 1500),
        new Product('sixteen', [this.games], 1600),
        new Product('seventeen', [this.paints], 1700),
        new Product('eighteen', [this.musicial_instr], 1800),
        new Product('nineteen', [this.medicines], 1900),
        new Product('twenty', [this.glues], 2000),
        new Product('twenty-one', [this.gifts], 2100),
        new Product('twenty-two', [this.gift_vouchers], 2200),
        new Product('some-transp', [this.transport], 1243),
        new Product('smth', [this.tools], 345),
        new Product('smth-again', [this.comp_parts], 264),
        new Product('smth-too', [this.toys], 973)        
    ]

    constructor() {
        for (let i = 0; i < this.categories.length; i++) {
            let products;
            for (let j = 0; j < this.categories[i].getProducts().length; j++) {
                products = this.categories[i].getProducts();
            }
            localStorage.setItem(JSON.stringify(this.categories[i].getName()), JSON.stringify(products));
        }
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
      let temp = key.replace('\"', '');
      temp = temp.replace('\"', '');
      categories.push(temp);
    }
    return categories;
  }
  addProduct(product: Product) {
      this.products.push(product);
      let temp = product.getCategoryProd();
    
      for (let i = 0; i < temp.length; i++) {
        if (JSON.parse(localStorage.getItem(JSON.stringify(temp[i]) || '[]')) !== undefined) {
            
            let productTemp = JSON.parse(localStorage.getItem(JSON.stringify(temp[i])) || '[]');
            let tempProductArray = String(productTemp).split(',');
            let prod = [];
            for (let j = 0; j < tempProductArray.length; j++) {
            prod.push(tempProductArray[j]);
            }
            prod.push(product.getProductName());
          
            localStorage.setItem(JSON.stringify(temp[i]), JSON.stringify(prod));
        
        }
        else {
          localStorage.setItem(JSON.stringify(temp[i]), JSON.stringify(product.getProductName()));
        }

    }
    }

    removeProduct(value: String) {
        for (let i = 0; i < this.products.length; i++) {
            if (value === this.products[i].getProductName()) {
                this.products = this.products.splice(i, 1);
            break;
            }
        }
        //get products
        for (let key in localStorage) {
            let products = [];
            for (let key in localStorage) {
                let product = String(JSON.parse(localStorage.getItem(key) || '[]'));
                let tempProductArray = product.split(',');
                if (tempProductArray.length === 1 && tempProductArray[0] === value) {
                    localStorage.setItem(key, JSON.stringify(''));
                    break;
                }
                else {
                    for (let i = 0; i < tempProductArray.length; i++) {
                        if (tempProductArray[i] === value) {
                            tempProductArray.splice(i, 1);
                            localStorage.setItem(key, JSON.stringify(tempProductArray));
                            break;
                        }
                    }
                }
            }
        }
    }

    addCategory(category: Category) {
        this.categories.push(category);
    }
    removeCategory(category: Category) {
        let index = this.categories.indexOf(category);
        this.categories.splice(index, 1);
        if (category.getProducts().length !== 0) {
            for (let i = 0; i < category.getProducts().length; i++) {
                for (let j = 0; j < this.products.length; j++) {
                    for (let k = 0; k < this.products[i].getCategoryProd().length; k++) {
                        if (category.getName() == this.products[j].getCategoryProd()[k]) {
                            if (this.products[j].getCategoryProd().length == 1) {
                                this.products = this.products.splice(j, 1);
                            }
                            else {
                                this.products[j].removeCategory(category);
                            }
                        }
                    }
                }
            }
        }
        localStorage.removeItem(JSON.stringify(category.getName()));
    }
    getSearchResult(value: String) {
        for (let i = 0; i < this.products.length; i++) {
            if (value == this.products[i].getProductName()) {
                return this.products[i].getSearchInfoProduct();
            }
        }
    }
}