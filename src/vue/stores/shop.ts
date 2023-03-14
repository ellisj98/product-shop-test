import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';
import RawProducts from '../../ts/Types/Product/TypeRawProducts';
import ProductsResponse from '../../ts/Interfaces/HttpResponse/ProductsResponse';
import RawProductData from '../../ts/Types/Product/RawProductData';
import RawProduct from '../../ts/Interfaces/Product/RawProduct';

interface State {
    products: RawProducts,
    productsInBasket: RawProductData,
}

const useShopStore = defineStore('shop', {
    state: (): State => ({
        products: null,
        productsInBasket: [],
    }),
    getters: {
        productsFetched: (state) : boolean => {
            return state.products !== null;
        },
        amountOfProductsInBasket: (state) : number => {
            return state.productsInBasket.length;
        },
        // Returns a total of the variant price used for each product.
        totalCostOfBasket() : number {
            if (this.amountOfProductsInBasket > 0 && this.productsInBasket) {
                let total = 0;
                this.productsInBasket.forEach(product => {
                    const price = Number(product.variants[0].price);
                    total+= price;
                });
                return total;
            }
            return 0;
        }
    },
    actions: {
        async getProducts(): Promise<AxiosResponse<ProductsResponse>> {
            try {
                const products = await axios.get('https://efuktshirts.com/products.json');
                this.products = products.data.products;
                return products;
            } catch (error) {
                // TODO: do something with error?
                throw error;
            }
        },
        pushProductToBasket(product: RawProduct) {
            if (!this.productsInBasket.includes(product)) {
                this.productsInBasket.push(product);
            }
        },
        removeProductFromBasket(product: RawProduct) {
            this.productsInBasket = this.productsInBasket.filter((productToFilter: RawProduct) => {
                return productToFilter.id !== product.id;
            });
        }
    },
});

export { State };

export default useShopStore;
