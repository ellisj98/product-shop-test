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
        getAmountOfProductsInBasket: (state) : number => {
            return state.productsInBasket.length;
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
            this.productsInBasket.push(product);
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
