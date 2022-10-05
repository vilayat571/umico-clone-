import { configureStore } from '@reduxjs/toolkit';
import allproductSlice from './slices/allproductSlice';
import badgeSlice from './slices/badgeSlice';
import categorySlice from './slices/categorySlice';
import contentFotterSlice from './slices/contentFotterSlice';
import loginSlice from './slices/loginSlice';
import productSlice from './slices/productSlice';
import resultSlice from './slices/resultSlice';
import sliderSlice from './slices/sliderSlice';

export const store = configureStore({
    reducer: {
        productReducer: productSlice,
        sliderReducer: sliderSlice,
        loginReducer: loginSlice,
        categoryReducer: categorySlice,
        contentFotterReducer: contentFotterSlice,
        allproductReducer: allproductSlice,
        resultReducer: resultSlice,
        badgeReducer:badgeSlice
    }
})