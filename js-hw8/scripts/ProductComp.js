Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
            imgProduct: 'https://placehold.it/200x150'
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    item.imgPath = `photo/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div class="products">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="item.imgPath"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <div class="product">
                <img :src="photo" alt="product">
                <div class="all_product_description">
                    <h2 class="product_name">{{product.product_name}}</h2>
                    <p class="product_description">{{product.description}}</p>
                    <p class="product_price">$<span class="product_price_value">{{product.price}}</span></p>
                    <div class="product-overlay">
                        <button class="product-btn" @click="$emit('add-product', product)"><img src="photo/cart-white.svg" alt="cart" class="cart-icon">Add to Cart</button>
                    </div>
                </div>
            </div>
    `
})