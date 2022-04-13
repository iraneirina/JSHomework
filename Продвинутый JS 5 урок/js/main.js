const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',// с каким элементом будет синхронизация
    data: { //это глобальные свойства, к ним можно обращаться из любого метода через this
        userSearch: '', // туда попадает то, что вводит пользователь
        showCart: false,
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [], //товары корзины
        filtered: [], //отфильтрованные товары
        imgCart:'https://via.placeholder.com/100x100',
        products: [], //товары каталога
        imgProduct: 'https://via.placeholder.com/200x150',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        filter(){
            let regexp = new RegExp(this.UserSearch, 'i'); // подставляется то, что ввел пользователь, а i означает, что регистр не важен
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        addProduct(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === item.id_product);
                        if(find){
                            find.quantity++;
                        } else {
                            const prod = Object.assign({quantity: 1}, item);
                            this.cartItems.push(prod)
                        }
                    }
                })
        },
        remove(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result ===1) {
                        if(item.quantity > 1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        }
    },
    mounted(){
        this.getJson(`${API + this.cartUrl}`) //извлекаем данные из файла в виде json сроки
            .then(data => { //data это исходник файла с корзиной
                for (let item of data.contents) { //обходим массив из файла
                    this.cartItems.push(item)
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item); //зачем доллар, что именно переопределяется
                    this.$data.filtered.push(item);
                }
            });
        this.getJson('getProducts.json')
            .then(data => {
                for(let item of data){
                    this.products.push(item);
                    this.filtered.push(item);
                }
            })
    }
});

