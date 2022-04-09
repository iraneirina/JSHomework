class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.countTotalCost();
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }


    countTotalCost(){
        let totalCost = 0;
        this.goods.forEach(product =>{
            totalCost += product.price;
            
        })
        console.log(totalCost);
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

// Функция добавляет продукт в корзину
function addProductToObject() {
    
}

 //Функция срабатывает когда нужно отрисовать продукт в корзине
function renderProductInBasket() {
    
}

//  Функция отрисовывает новый товар в корзине
 
function renderNewProductInBasket() {
    
}

//Функция увеличивает количество товаров в строке в корзине

function increaseProductCount() {
   
}

//Функция пересчитывает стоимость товара умноженное на количество товара

function recalculateSumForProduct() {
    
}

//Функция пересчитывает общую стоимость корзины и выводит это значение на страницу
function calculateAndRenderTotalBasketSum() {
   
}

//Эта функция срабатывает когда добавляют новый товар в корзину

function addProductIntoBasket() {
    addProductToObject();
    renderProductInBasket();
    calculateAndRenderTotalBasketSum();
}

